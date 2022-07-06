import React from 'react'
import Banners from './Banners'
import ProductInterface from '../models/product.model'
import ProductList from './product/ProductList'

const Content: React.FC = () => {
  const [products, setProducts] = React.useState<ProductInterface[]>([])

  // Todo refactor fetch
  // Todo reverse products

  fetch('https://fakestoreapi.com/products').then(response => {
    let jsonResponse = response.json()

    jsonResponse.then(rawData => {
      let data = []

      for (let i = 0; i < rawData.length; i++) {
        let updatedProd = rawData[i]
        data.push(updatedProd)
      }
      // this.setState({
      // products: data
      // })
      // this.setState({
      //   prodCount: data.length
      // })
      setProducts(data)
    })
  })

  return (
    <div className='container'>
      <Banners />
      <ProductList products={products} onFav={() => {}} />
    </div>
  )
}

export default Content
