import React from 'react'
import Product from './Product'
import ProductInterface from '../../models/product.model'
import ProductsDetail from './ProductsDetail'

interface PostsProps {
  products: any
  onFav: (title: string) => void
}

const ProductList: React.FC<PostsProps> = ({ products, onFav }) => {
  return (
    <div>
      <ProductsDetail productsCount={products.length} favoritesCount={0} />
      <div>
        {products.map((product: ProductInterface, index: number) => (
          <Product key={index} product={product} onFav={onFav} />
        ))}
      </div>
    </div>
  )
}
export default ProductList
