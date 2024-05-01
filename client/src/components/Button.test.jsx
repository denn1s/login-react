import { test, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

test('Renders correctly', () => {
   render(<Button />)
})


test('Renders the text CLICK ME', () => {
  const { getByText } = render(<Button text="CLICK ME"/>)
  const element = getByText('CLICK ME')
  expect(element).toBeInTheDocument()
})

test('Calls the callback function when clicked', () => {
  const spy = vi.fn()
  const { getByText } = render(<Button text="CLICK ME" onClick={spy} />)
  const element = getByText('CLICK ME')

  fireEvent.click(element)
  fireEvent.click(element)
  fireEvent.click(element)
  fireEvent.click(element)

  expect(spy).toHaveBeenCalledOnce()
  
})
