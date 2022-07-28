import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Card from './Card'

test('render content', () => {
  const text = 'anna'
  const palindrome = true

  const component = render(<Card text={text} palindrome={palindrome} />)

  expect(component.container).toHaveTextContent('anna: Es un palíndromo')
})

test('render content', () => {
  const text = 'aloh'
  const palindrome = false

  const component = render(<Card text={text} palindrome={palindrome} />)

  component.debug()

  expect(component.container).toHaveTextContent('aloh: No es palíndromo')
})

test('render content', () => {
  const text = 'aibofobia'
  const palindrome = true

  const component = render(<Card text={text} palindrome={palindrome} />)

  expect(component.container).toHaveTextContent('aibofobia: Es un palíndromo')
})
