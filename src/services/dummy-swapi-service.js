export default class DummySwapiService {
  _people = [
    {
      id: 1,
      name: 'NO_DATA',
      gender: 'NO_DATA',
      birthYear: 'NO_DATA',
      eyeColor: 'NO_DATA',
    },
  ]

  _planets = {
    items: [
      {
        id: 1,
        name: 'NO_DATA',
        population: 'NO_DATA',
        rotationPeriod: 'NO_DATA',
        diameter: 'NO_DATA',
        climate: 'NO_DATA',
        gravity: 'NO_DATA',
        terrain: 'NO_DATA',
        residents: 'NO_DATA',
      },
    ],
    next: null,
    prev: null,
  }

  getAllPeople = async () => {
    return this._people
  }

  getPerson = async () => {
    return this._people[0]
  }

  getAllPlanets = async () => {
    return this._planets
  }

  getPlanet = async () => {
    return this._planets[0]
  }

  getPersonImage = () => {
    return `NO_DATA`
  }

  getPlanetImage = () => {
    return `NO_DATA`
  }
}
