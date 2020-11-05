import React, { useState } from 'react'
import { PlanetDetails, PlanetList } from '../sw-components'
import Row from '../row'
import './planets-page.css'

const PlanetsPage = () => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [nextPage, setNextPage] = useState()

  const onItemSelected = selectedItem => {
    setSelectedItem(selectedItem)
  }

  const handleNextButtonData = value => {
    setNextPage(value)
  }

  const onBtnClick = event => {
    if (event.currentTarget.name === 'prev' && currentPage > 1) {
      setCurrentPage(page => page - 1)
    } else if (event.currentTarget.name === 'next') {
      setCurrentPage(page => page + 1)
    }
    return null
  }

  return (
    <>
      <Row
        left={
          <PlanetList
            onItemSelected={onItemSelected}
            currentPage={currentPage}
            handleNextButtonData={handleNextButtonData}
          />
        }
        right={<PlanetDetails itemId={selectedItem} />}
      />
      <div className="d-flex justify-content-center button-wrapper">
        <button
          className="btn btn-dark"
          onClick={onBtnClick}
          name="prev"
          disabled={currentPage <= 1}
        >
          Prev
        </button>
        <button
          className="btn btn-dark"
          onClick={onBtnClick}
          name="next"
          disabled={!nextPage}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default PlanetsPage
