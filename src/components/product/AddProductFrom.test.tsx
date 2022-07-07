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

  it('all the form items render', () => {
    expect(getTitle()).toBeInTheDocument()
    expect(getPrice()).toBeInTheDocument()
    expect(getDescription()).toBeInTheDocument()
    expect(getButton()).toBeInTheDocument()
  })
})

function getTitle () {
  return screen.getByTestId('title')
}
function getPrice () {
  return screen.getByTestId('price')
}
function getDescription () {
  return screen.getByTestId('description')
}
function getButton () {
  return screen.getByRole('button')
}
