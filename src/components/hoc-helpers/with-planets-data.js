import React, { useEffect, useState } from 'react'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

const withPlanetsData = View => props => {
  const { currentPage, handleNextButtonData } = props
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    update()
  }, [currentPage])

  const update = () => {
    setLoading(true)
    setError(false)

    props
      .getData(currentPage)
      .then(data => {
        setLoading(false)
        handleNextButtonData(data.next)
        return setData(data)
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }

  const renderComponent = () => {
    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return <View {...props} data={data} />
  }

  return <>{renderComponent()}</>
}

export default withPlanetsData
