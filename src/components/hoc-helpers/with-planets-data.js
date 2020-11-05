import React, { useEffect, useState } from 'react'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

const withPlanetsData = View => props => {
  const { currentPage } = props
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    console.log(data)
    update()
  }, [])

  const update = () => {
    setLoading(true)
    setError(false)

    props
      .getData(currentPage)
      .then(data => {
        setLoading(false)
        return setData(data.items)
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }

  // const newData = useMemo(() => update(), [currentPage])

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
