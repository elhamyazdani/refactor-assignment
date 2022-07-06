import React, { useState } from 'react'
import styles from './add_product.module.css'
import Button from '../tools/Button'
import ProductInterface from '../../models/product.model'

interface AddProductProps {
  addProduct: (newProduct: ProductInterface) => void
}


const AddProduct: React.FC<AddProductProps> = ({ addProduct }) => {
  
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <>
      <div className={styles.buttonWrapper}>
        <Button onClick={() => setShowModal(true)}>
          Send product proposal
        </Button>
      </div>
    </>
  )
}

export default AddProduct