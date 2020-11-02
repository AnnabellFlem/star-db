import React, { useEffect, useState } from 'react'
import './error-button.css'

const ErrorButton = () => {
  const [renderError, setRenderError] = useState(false)

  useEffect(() => {
    if (renderError) {
      console.log('Error in button')
    }
  }, [renderError])

  return (
    <button
      className="error-button btn btn-danger btn-lg"
      onClick={() => setRenderError(true)}
    >
      Throw Error
    </button>
  )
}

export default ErrorButton
