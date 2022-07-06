import React, { useState } from 'react'
import Button from '../tools/Button'
import ProductInterface from '../../models/product.model'
import styles from './add_product_form.module.css'
import TextField from '../form/TextField'

interface AddProductFormProps {
  addProduct: (newProduct: ProductInterface) => void
  setShowModal: (showModal: boolean) => void
}

const AddProductForm: React.FC<AddProductFormProps> = ({
  addProduct,
  setShowModal
}) => {
  let formRef = React.useRef<HTMLFormElement>(null)
  let titleRef = React.useRef<HTMLInputElement>(null)
  let priceRef = React.useRef<HTMLInputElement>(null)
  let descriptionRef = React.useRef<HTMLTextAreaElement>(null)

  const [formValues, setFormValues] = useState<{
    title: string
    price: number
    description: string
  }>({
    title: '',
    price: 0,
    description: ''
  })

  const handleChange = (event: any) => {
    const { name, value } = event.target
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (!titleRef.current?.value) {
      alert('Your product needs a title')

      return
    }

    if (!descriptionRef.current?.value || !priceRef.current?.value) {
      alert('Your product needs some content')

      return
    }

    // props['on-submit']({
    //   title: titleRef.current && titleRef.current.value,
    //   description: descriptionRef.current && descriptionRef.current.value,
    //   price: priceRef.current && priceRef.current.value
    // })

    formRef.current?.reset()
  }

  return (
    <form onSubmit={event => handleSubmit(event)} ref={formRef}>
      <TextField
        name={'title'}
        label={'Product title'}
        placeholder={'Title...'}
        type={'text'}
        showMessage={false}
        handleChange={handleChange}
        isRequired
      />
      <TextField
        name={'price'}
        label={'Product details'}
        placeholder={'Price...'}
        type={'text'}
        showMessage={false}
        handleChange={handleChange}
        isRequired
      />
      <TextField
        name={'description'}
        placeholder={'Start typing product description here...'}
        type={'textarea'}
        showMessage={false}
        handleChange={handleChange}
        isRequired
      />
      <Button>Add a product</Button>
    </form>
  )
}

export default AddProductForm
