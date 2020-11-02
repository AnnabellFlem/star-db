import React, { useEffect, useState } from 'react'
import { Img } from 'react-image'
import PropTypes from 'prop-types'

import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi-service'

import './random-planet.css'

const RandomPlanet = ({ updateInterval = 10000 }) => {
  const swapiService = new SwapiService()

  const [planet, setPlanet] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    updatePlanet()
    const interval = setInterval(() => updatePlanet(), updateInterval)
    return () => clearInterval(interval)
  }, [])

  const onPlanetLoaded = planet => {
    setPlanet(planet)
    setLoading(false)
    setError(false)
  }

  const onError = () => {
    setLoading(false)
    setError(true)
  }

  const updatePlanet = () => {
    const id = Math.floor(Math.random() * 17) + 2
    swapiService
      .getPlanet(id)
      .then(data => onPlanetLoaded(data))
      .catch(onError)
  }

  const hasData = !(loading || error)

  const errorMessage = error ? <ErrorIndicator /> : null
  const spinner = loading ? <Spinner /> : null
  const content = hasData ? <PlanetView planet={planet} /> : null

  return (
    <div className="random-planet jumbotron rounded">
      {errorMessage}
      {spinner}
      {content}
    </div>
  )
}

export default RandomPlanet

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet

  return (
    <>
      <Img
        className="planet-image"
        src={[
          `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
          'https://starwars-visualguide.com/assets/img/big-placeholder.jpg',
        ]}
        alt="planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  )
}
