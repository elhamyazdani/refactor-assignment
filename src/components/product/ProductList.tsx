import React from 'react'
import Product from './Product'
import ProductInterface from '../../models/product.model'

interface PostsProps {
  products: any
  onFav: (title: string) => void
}

const ProductList: React.FC<PostsProps> = ({ products, onFav }) => {

    //TODO Make products upside down
  return (
      <div>
      {products.map((product: ProductInterface, index: number) => (
        <Product key={index} product={product} onFav={onFav} />
      ))}
    </div>
  )
}
export default ProductList
