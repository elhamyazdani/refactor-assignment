import React, { useState } from 'react'
import Product from './Product'
import ProductInterface from '../../models/product.model'
import ProductsDetail from './ProductsDetail'

interface PostsProps {
  products: any
  onFav: (title: string) => void
}

const ProductList: React.FC<PostsProps> = ({ products }) => {
  const [favoriteCount, setFavoriteCount] = useState(0)

  return (
    <div>
      <ProductsDetail
        productsCount={products.length}
        favoritesCount={favoriteCount}
      />
      <div>
        {products.map((product: ProductInterface, index: number) => (
          <Product
            key={index}
            product={product}
            setFavoriteCount={setFavoriteCount}
          />
        ))}
      </div>
    </div>
  )
}
export default ProductList
