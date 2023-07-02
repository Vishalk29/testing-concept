import { render, screen } from '@testing-library/react'
import Counter from './Counter'
import user from '@testing-library/user-event'
describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toBeInTheDocument()

    const incrementElement = screen.getByRole('button', {
      name: 'Increment',
    })
    expect(incrementElement).toBeInTheDocument()
  })

  test('render a count of 0', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('0')
  })
  test('render the count of 1 after clicking the increase button', async () => {
    user.setup()
    render(<Counter />)
    const increaeseButton = screen.getByRole('button', {
      name: 'Increment',
    })
    await user.click(increaeseButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('1')
  })
})
