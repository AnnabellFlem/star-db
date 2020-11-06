import React from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import SwapiService from '../../services/swapi-service'

import { PeoplePage, PlanetsPage } from '../pages'

import { SwapiServiceProvider } from '../swapi-service-context'

import './app.css'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  const swapiService = new SwapiService()

  return (
    <SwapiServiceProvider value={swapiService}>
      <Router basename={'/'}>
        <div className="stardb-app">
          <Header />
          <RandomPlanet />

          <Switch>
            <Route path="/" exact>
              <h2>Welcome to StarDB</h2>
            </Route>
            <Route path="/people/:id?" component={PeoplePage} />
            <Route path="/planets" component={PlanetsPage} />

            <Route>
              <h2>Page not found</h2>
            </Route>
          </Switch>
        </div>
      </Router>
    </SwapiServiceProvider>
  )
}

export default App
