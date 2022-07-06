import React, { useState } from 'react'
import styles from './add_product.module.css'
import Button from '../tools/Button'
import Modal from 'react-modal'
import { FaTimes } from 'react-icons/fa'
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

      <Modal
        isOpen={showModal}
        className={styles.reactModalContent}
        overlayClassName={styles.reactModalOverlay}
      >
        <div className={styles.modalContentHelper}>
          <div
            className={styles.modalClose}
            onClick={() => setShowModal(false)}
          >
            <FaTimes />
          </div>

          {/* TODO insert Form here */}

        </div>
      </Modal>
    </>
  )
}

export default AddProduct