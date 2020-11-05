import React, { useState } from 'react'
import { PlanetDetails, PlanetList } from '../sw-components'
import Row from '../row'
import './planets-page.css'

const PlanetsPage = () => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const onItemSelected = selectedItem => {
    setSelectedItem(selectedItem)
  }

  const onBtnClick = event => {
    if (event.currentTarget.name === 'prev' && currentPage !== 0) {
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
          />
        }
        right={<PlanetDetails itemId={selectedItem} />}
      />
      <div className="d-flex justify-content-center button-wrapper">
        <button className="btn btn-dark" onClick={onBtnClick} name="prev">
          Prev
        </button>
        <button className="btn btn-dark" onClick={onBtnClick} name="next">
          Next
        </button>
      </div>
    </>
  )
}

export default PlanetsPage
