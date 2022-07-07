import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import styles from './product.module.css'
import ProductInterface from '../../models/product.model'

interface ProductProps {
  product: ProductInterface
  setFavoriteCount: (count: number | ((prev: number) => number)) => void
}

const Product: React.FC<ProductProps> = ({ product, setFavoriteCount }) => {
  const [isFavoriteState, setIsFavoriteState] = useState(product.isFavorite)

  function toggleFavoriteHandler () {
    setIsFavoriteState(!isFavoriteState)
    product.isFavorite = isFavoriteState
    console.log(product.isFavorite)
    setFavoriteCount(prev => {
      return isFavoriteState ? prev - 1 : prev + 1
    })
  }

  return (
    <div className={styles.productStyle}>
      <div className={styles.productTitle}>{product.title}</div>
      <div className={styles.productBody}>
        {product.rating && <div>Rating: {product.rating.rate}/5</div>}

        <div>Price: {product.price}</div>

        <div>
          Description:
          <div className={styles.productBodyText}>{product.description}</div>
        </div>
      </div>
      <div className={styles.actionBar}>
        <div
          className={`${styles.actionBarItem} ${isFavoriteState && 'active'}`}
          role='button'
          onClick={toggleFavoriteHandler}
        >
          <FaStar />
          <div className={styles.actionBarItemLabel}>
            {isFavoriteState ? 'Remove from favorites' : 'Add to favorites'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
