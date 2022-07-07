import React, { useState } from 'react'
import Button from '../tools/Button'
import ProductInterface from '../../models/product.model'
import TextField from '../form/TextField'
import styles from './add_product_form.module.css'
interface AddProductFormProps {
  addProduct: (newProduct: ProductInterface) => void
  setShowModal: (showModal: boolean) => void
  setShowLoading: (showModal: boolean) => void
}

async function postData (url = '', payload = {}) {
  console.log('async', payload)
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload)
  })
  return response.json()
}

const newProductDefaultValues = {
  title: '',
  price: 0,
  description: '',
  isFavorite: false,
  rating: {
    rate: 0,
    count: 0
  }
}

const AddProductForm: React.FC<AddProductFormProps> = ({
  addProduct,
  setShowModal,
  setShowLoading
}) => {
  const [showMessage, setShowMessage] = useState<boolean>(false)

  let formRef = React.useRef<HTMLFormElement>(null)

  const [formValues, setFormValues] = useState<{
    title: string
    price: number
    description: string
  }>({
    title: '',
    price: 0,
    description: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!Object.values(formValues).every(a => a)) {
      setShowMessage(true)
      return
    }

    setShowLoading(true)
    postData('https://fakestoreapi.com/products', {
      ...newProductDefaultValues,
      ...formValues
    }).then(data => {
      setTimeout(() => {
        console.log(data)
        addProduct({
          ...newProductDefaultValues,
          ...formValues
        })
        setShowLoading(false)
      }, 2000)
    })

    formRef.current?.reset()
    setShowModal(false)
  }

  return (
    <form onSubmit={event => handleSubmit(event)} ref={formRef}>
      {showMessage && (
        <div className={styles.message}>Fill the required fields</div>
      )}
      <TextField
        name={'title'}
        label={'Product title'}
        placeholder={'Title...'}
        type={'text'}
        handleChange={handleChange}
        isRequired
      />
      <TextField
        name={'price'}
        label={'Product details'}
        placeholder={'Price...'}
        type={'text'}
        handleChange={handleChange}
        isRequired
      />
      <TextField
        name={'description'}
        placeholder={'Start typing product description here...'}
        type={'textarea'}
        handleChange={handleChange}
        isRequired
      />
      <Button>Add a product</Button>
    </form>
  )
}

export default AddProductForm
