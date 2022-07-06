import React from 'react'
import lodash from 'lodash'
import Product from './Product'

interface IPostsProps {
  products: any
  onFav: (title: string) => void
}

const ProductsList: React.FC<IPostsProps> = ({products, onFav}) => {
  let productsarr = []
  for (const [i, p] of products.entries()) {
    productsarr.push(
      <Product key={i} index={i} product={p} onFav={onFav} />
    )
  }
  return <div>{lodash.reverse(productsarr)}</div>
}
export default ProductsList
