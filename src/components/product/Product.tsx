import React from 'react'
import { FaStar } from 'react-icons/fa'
import styles from './product.module.css'
import ProductInterface from '../../models/product.model'

interface ProductProps {
  product: ProductInterface
  onFav: (title: string) => void
}

const Product: React.FC<ProductProps> = ({ product, onFav }) => {

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
