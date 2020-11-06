import React, { useCallback, useEffect, useState } from 'react'
import SwapiService from '../../services/swapi-service'
import { Link } from 'react-router-dom'

const findPerson = url => {
  const personId = url.split('/')
  return personId[personId.length - 2]
}

const Record = ({ item, field, label }) => {
  const swapiService = new SwapiService()

  const [currentPerson, setCurrentPerson] = useState([])

  const isResident = field === 'residents'

  const onError = err => {
    console.log(err)
  }

  const update = useCallback(() => {
    if (isResident) {
      const residents = item[field]

      residents &&
        residents.length &&
        residents.map(item => {
          const id = findPerson(item)
          return swapiService
            .getPerson(id)
            .then(data =>
              setCurrentPerson(item => [...item, { id: id, name: data.name }]),
            )
            .catch(data => onError(data))
        })
    }
    setCurrentPerson([])
  }, [])

  useEffect(() => {
    update()
  }, [update])

  const handleField = () => {
    if (isResident) {
      const residents = item[field]
      return residents && residents.length ? (
        <ul>
          {currentPerson.map(resident => {
            return (
              <li key={resident.name}>
                <Link to={`/people/${resident.id}`}>{resident.name}</Link>
              </li>
            )
          })}
        </ul>
      ) : (
        <span>No residents</span>
      )
    } else {
      return <span>{item[field]}</span>
    }
  }

  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      {handleField()}
    </li>
  )
}

export default Record
