import { render, screen } from '@testing-library/react'
import { Greet } from './Greet'
/*
Here is TDD approach example we following , lets see the requirements
1) Greet should render the text hello and if a name is passed into the component 2) it should render hello followed by name 
*/
test('Greet renders correctly', () => {
  render(<Greet />)
  const textElement = screen.getByText('Hello')
  expect(textElement).toBeInTheDocument()
})

test('Greet renders the name', () => {
  render(<Greet name='vishal' />)
  const textElement = screen.getByText('Hello vishal')
  expect(textElement).toBeInTheDocument()
})
