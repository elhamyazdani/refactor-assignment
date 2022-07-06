import React, { useState } from 'react'
import Button from '../tools/Button'
import ProductInterface from '../../models/product.model'
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

    //TODO check required fields are filled

    addProduct({
      isFavorite: false,
      rating: {
        rate: 0,
        count: 0
      },
      ...formValues
    })
    formRef.current?.reset()
    setShowModal(false)
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
