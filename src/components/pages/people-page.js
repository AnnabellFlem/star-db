import React from 'react'
import { withRouter, useHistory, useParams } from 'react-router-dom'
import { PersonDetails, PersonList } from '../sw-components'
import Row from '../row'

const PeoplePage = () => {
  const history = useHistory()
  const { id } = useParams()

  const handleClick = id => {
    history.push(id)
  }

  return (
    <Row
      left={<PersonList onItemSelected={handleClick(id)} />}
      right={<PersonDetails itemId={id} />}
    />
  )
}

export default withRouter(PeoplePage)
