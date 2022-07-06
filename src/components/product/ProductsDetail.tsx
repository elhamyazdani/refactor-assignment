import React from 'react'
import styles from './products_detail.module.css'

interface ProductsDetailProps {
  productsCount: number
  favoritesCount: number
}

const ProductsDetail: React.FC<ProductsDetailProps> = ({
  productsCount,
  favoritesCount
}) => {
  return (
    <div className={styles.details}>
      <span>{`Total products: ${productsCount} - `}</span>
      <span>{`Number of favorites: ${favoritesCount}`}</span>
    </div>
  )
}

export default ProductsDetail
