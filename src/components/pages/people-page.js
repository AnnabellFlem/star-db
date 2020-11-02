import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { PersonDetails, PersonList } from '../sw-components'
import Row from '../row'

const PeoplePage = () => {
  const { id } = useParams()
  const history = useHistory()

  return (
    <Row
      left={<PersonList onItemSelected={id => history.push(id)} />}
      right={<PersonDetails itemId={id} />}
    />
  )
}

export default PeoplePage
