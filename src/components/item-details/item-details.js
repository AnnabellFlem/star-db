import React, { useEffect, useState } from 'react'
import ErrorButton from '../error-button/error-button'
import ImgFallback from 'react-image-fallback'
import './item-details.css'

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}

export { Record }

const ItemDetails = ({ itemId, getData, getImageUrl, children }) => {
  const [item, setItem] = useState(null)
  const [image, setImage] = useState(null)

  useEffect(() => {
    updateItem()
  }, [itemId, getData, getImageUrl])

  const onError = () => {
    console.log('error')
  }

  const updateItem = () => {
    if (!itemId) {
      return
    }

    getData(itemId)
      .then(item => {
        setItem(item)
        return setImage(getImageUrl(item))
      })
      .catch(onError)
  }

  return (
    <>
      {!item ? (
        <span>Select a item from a list</span>
      ) : (
        <div className="item-details card">
          <ImgFallback
            className="item-image"
            src={image}
            fallbackImage={
              'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
            }
            alt="item"
            width={124}
            height={124}
          />

          <div className="card-body">
            <h4>{item?.name}</h4>
            <ul className="list-group list-group-flush">
              {React.Children.map(children, child => {
                return React.cloneElement(child, { item })
              })}
            </ul>
            <ErrorButton />
          </div>
        </div>
      )}
    </>
  )
}

export default ItemDetails
