import React from 'react'
import ItemList from '../item-list'
import {
  withData,
  withSwapiService,
  withChildFunction,
  compose,
} from '../hoc-helpers'

const renderName = ({ name }) => <span>{name}</span>

const renderPlanetName = ({ name, population, climate }) => {
  return (
    <>
      <h4>{name}</h4>
      <ul>
        <li>population: {population}</li>
        <li>climate: {climate}</li>
      </ul>
    </>
  )
}

const mapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople,
  }
}

const mapPlanetMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets,
  }
}

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName),
)(ItemList)

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderPlanetName),
)(ItemList)

export { PersonList, PlanetList }
