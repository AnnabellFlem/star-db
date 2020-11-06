export default class SwapiService {
  _apiBase = 'https://swapi.dev/api'
  _imageBase = 'https://starwars-visualguide.com/assets/img'

  getResource = async (url = '') => {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return await res.json()
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`)
    return { items: res.results.map(this._transformPerson) }
  }

  getPerson = async id => {
    const person = await this.getResource(`/people/${id}/`)
    return this._transformPerson(person)
  }

  getAllPlanets = async (id = 1) => {
    const res = await this.getResource(`/planets/?page=${id}`)
    return {
      items: res.results.map(this._transformPlanet),
      next: res.next,
      previous: res.previous,
    }
  }

  getPlanet = async id => {
    const planet = await this.getResource(`/planets/${id}/`)
    return this._transformPlanet(planet)
  }

  getPersonImage = ({ id }) => {
    return `${this._imageBase}/characters/${id}.jpg`
  }

  getPlanetImage = ({ id }) => {
    return `${this._imageBase}/planets/${id}.jpg`
  }

  _extractId = item => {
    const idRegExp = /\/([0-9]*)\/$/
    return item.url.match(idRegExp)[1]
  }

  _transformPlanet = planet => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      climate: planet.climate,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      gravity: planet.gravity,
      terrain: planet.terrain,
      residents: planet.residents,
    }
  }

  _transformPerson = person => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    }
  }
}
