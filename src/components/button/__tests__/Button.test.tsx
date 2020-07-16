import React from 'react'
import { render, fireEvent, screen } from 'test-utils'
import { Button } from '../'

describe('[Component]: Button', () => {
  const mockOnClickFunction = jest.fn()

  it('render the component', () => {
    expect(render(<Button onClick={mockOnClickFunction}>Hello world</Button>)).toMatchSnapshot()
  })

  it('render the negative style component', () => {
    expect(
      render(
        <Button negative onClick={mockOnClickFunction}>
          Hello world
        </Button>
      )
    ).toMatchSnapshot()
  })

  it('should trigger function when button is pressed', () => {
    render(<Button onClick={mockOnClickFunction}>Hello world</Button>)

    fireEvent.click(screen.getByText('Hello world'))

    expect(mockOnClickFunction).toHaveBeenCalled()
  })
})
