import React, { useCallback, useEffect, useState } from 'react'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

const withData = View => props => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const update = useCallback(() => {
    setLoading(true)
    setError(false)

    props
      .getData()
      .then(data => {
        setLoading(false)
        return setData(data)
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }, [props])

  useEffect(() => {
    update()
  }, [update])

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

export default withData
