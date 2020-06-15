import React from 'react'
import { render } from 'test-utils'
import Title from '..';

describe('[Component]: Title', () => {
  it('render the component', () => {
    expect(render(<Title>Hello world</Title>)).toMatchSnapshot();
  });

  it('render the component with a different size', () => {
    expect(render(<Title size="48px">Hello world</Title>)).toMatchSnapshot();
  });

  it('render the component with a different color', () => {
    expect(render(<Title color="blue">Hello world</Title>)).toMatchSnapshot();
  });
});