import { render, screen } from '@testing-library/react'
import React from 'react'
import AddProductForm from './AddProductForm'

describe('Add Product Form', () => {
  beforeEach(() => {
    render(
      <AddProductForm
        addProduct={() => {}}
        setShowModal={() => {}}
        setShowLoading={() => {}}
      />
    )
  })
})
