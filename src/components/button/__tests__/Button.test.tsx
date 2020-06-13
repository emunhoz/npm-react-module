import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Button } from '../'

describe('[Component]: Button', () => {
  const mockOnClickFunction = jest.fn();

  it('render the component', () => {
    expect(render(<Button onClick={mockOnClickFunction}>Hello world</Button>)).toMatchSnapshot();
  });

  it('render the negative style component', () => {
    expect(render(<Button negative onClick={mockOnClickFunction}>Hello world</Button>)).toMatchSnapshot();
  });

  it('should trigger function when button is pressed', async () => {
    const { getByText } = render(<Button onClick={mockOnClickFunction}>Hello world</Button>)

    fireEvent.click(getByText('Hello world'));
    expect(mockOnClickFunction).toHaveBeenCalled();
  })
})
