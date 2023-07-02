import { render, screen } from '@testing-library/react'
import Skills from './Skills'

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JS']

  test('render correctly', () => {
    render(<Skills skills={skills} />)
    const listElment = screen.getByRole('list')
    expect(listElment).toBeInTheDocument()
  })
  test('render the list of items', () => {
    render(<Skills skills={skills} />)
    const listItemElement = screen.getAllByRole('listitem')
    expect(listItemElement).toHaveLength(skills.length)
  })
  test('render login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', {
      name: 'login',
    })
    expect(loginButton).toBeInTheDocument()
  })
  test('start learning button not render', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.queryByRole('button', {
      name: 'start learning',
    })
    expect(loginButton).not.toBeInTheDocument()
  })
})
