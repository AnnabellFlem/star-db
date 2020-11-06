import React, { useCallback, useEffect, useState } from 'react'
import ImgFallback from 'react-image-fallback'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi-service'

import './random-planet.css'

const RandomPlanet = ({ updateInterval = 10000 }) => {
  const swapiService = new SwapiService()

  const [planet, setPlanet] = useState({})
  const [service] = useState(swapiService)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const updatePlanet = useCallback(() => {
    const id = Math.floor(Math.random() * 17) + 2
    service
      .getPlanet(id)
      .then(data => onPlanetLoaded(data))
      .catch(onError)
  }, [service])

  useEffect(() => {
    updatePlanet()
    const interval = setInterval(() => updatePlanet(), updateInterval)
    return () => clearInterval(interval)
  }, [updatePlanet])

  const onPlanetLoaded = planet => {
    setPlanet(planet)
    setLoading(false)
    setError(false)
  }

  const onError = () => {
    setLoading(false)
    setError(true)
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
  const { id, name, population, climate } = planet

  return (
    <>
      <ImgFallback
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        fallbackImage={
          'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
        }
        alt="planet"
        width={150}
        height={150}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Climate</span>
            <span>{climate}</span>
          </li>
        </ul>
      </div>
    </>
  )
}
