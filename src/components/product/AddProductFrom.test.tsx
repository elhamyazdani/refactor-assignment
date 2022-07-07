import { render, screen } from '@testing-library/react'
import React from 'react'
import AddProductForm from './AddProductForm'
import user from '@testing-library/user-event'

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
  it('onSubmit should not happen when the title field is not filled', () => {
    user.type(getPrice(), 'Test price')
    user.type(getDescription(), 'Test description as a textbox it is longer')
    user.click(getButton())
    expect(getError()).toBeInTheDocument()
  })

  it('onSubmit should not happen when the price field is not filled', () => {
    user.type(getTitle(), 'Test title')
    user.type(getDescription(), 'Test description as a textbox it is longer')
    user.click(getButton())
    expect(getError()).toBeInTheDocument()
  })

  it('onSubmit should happen when the description field in not filled', () => {
    user.type(getTitle(), 'Test title')
    user.type(getPrice(), 'Test price')
    user.click(getButton())
    expect(getError()).toBeInTheDocument()
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
function getError () {
  return screen.getByText(/fill the required fields/i)
}
