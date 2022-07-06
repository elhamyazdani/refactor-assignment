import React from 'react'
import { FaStar } from 'react-icons/fa'
import styles from './product.module.css'

const Product: React.FC<{
  index: number
  product: {
    title: string
    description: string
    price: number
    isFavorite: boolean
    rating: { rate: number; count: number }
  }
  onFav: (title: string) => void
}> = ({ product, onFav }) => {
    
  // Problem: Now product title can be too long, I just put overflowX as fix now
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
          className={`${styles.actionBarItem} ${
            product.isFavorite && 'active'
          }`}
          role='button'
            onClick={() => {
            onFav(product.title)
          }}
        >
          <FaStar />
          <div className={styles.actionBarItemLabel}>
            {!!!!product.isFavorite
              ? 'Remove from favorites'
              : 'Add to favorites'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
