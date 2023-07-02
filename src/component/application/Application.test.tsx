import { Application } from './Application'
import { render, screen } from '@testing-library/react'
describe('Application', () => {
  test('Renders correctly', () => {
    render(<Application />)

    const pageHeading = screen.getByRole('heading', {
      level: 1,
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', {
      level: 2,
    })
    expect(sectionHeading).toBeInTheDocument()

    const paragraphElement = screen.getByText('All fields are mandatory')
    expect(paragraphElement).toBeInTheDocument()

    //TextMatch USING STRINF REGEX,FUNCTION
    const paragraphElement1 = screen.getByText('ll fields are mandatory', {
      exact: false,
    })
    expect(paragraphElement1).toBeInTheDocument()

    const paragraphElement2 = screen.getByText(/field/)
    expect(paragraphElement2).toBeInTheDocument()

    const paragraphElement3 = screen.getByText((content) =>
      content.startsWith('All')
    )
    expect(paragraphElement3).toBeInTheDocument()

    const titleElement = screen.getByTitle('close')
    expect(titleElement).toBeInTheDocument()

    const imageElement = screen.getByAltText('a person with a laptop')
    expect(imageElement).toBeInTheDocument()

    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    })
    expect(nameElement).toBeInTheDocument()

    const nameElement2 = screen.getByLabelText('Name', {
      selector: 'input',
    })
    expect(nameElement2).toBeInTheDocument()

    const nameElement3 = screen.getByPlaceholderText('Fullname')
    expect(nameElement3).toBeInTheDocument()

    const nameElement4 = screen.getByDisplayValue('Vishwas')
    expect(nameElement4).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()
  })
})
