import React, { useState } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorBoundry from '../error-boundry'
import SwapiService from '../../services/swapi-service'
import DummySwapiService from '../../services/dummy-swapi-service'

import { PeoplePage, PlanetsPage } from '../pages'

import { SwapiServiceProvider } from '../swapi-service-context'

import './app.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  const [swapiService, setSwapiService] = useState(new SwapiService())

  const onServiceChange = () => {
    setSwapiService(() => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService
      return new Service()
    })
  }

  return (
    <ErrorBoundry>
      <SwapiServiceProvider value={swapiService}>
        <Router>
          <div className="stardb-app">
            <Header onServiceChange={onServiceChange} />
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
    </ErrorBoundry>
  )
}

export default App
