import React, { useEffect } from 'react'
import Banners from './Banners'
import ProductInterface from '../models/product.model'
import ProductList from './product/ProductList'
import AddProduct from './product/AddProduct'

const Content: React.FC = () => {
  const [products, setProducts] = React.useState<ProductInterface[]>([])
  
  const addProduct = (newProduct: ProductInterface) => {
    setProducts(prevProducts => {
      return [...prevProducts, newProduct]
    })
  }

  //TODO better to use Axios

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        let reversedProducts = data.slice().reverse()
        setProducts(reversedProducts)
      })
  }, [])

  return (
    <div className='container'>
      <Banners />
      <AddProduct addProduct={addProduct} />
      <ProductList products={products} onFav={() => {}} />
    </div>
  )
}

export default Content
