import * as React from 'react'
import { render } from 'test-utils'
import SquareButton from '../';

describe('[Component]: SquareButton', () => {
  it('render the component', () => {
    expect(render(<SquareButton onClick={() => console.log}>Text</SquareButton>)).toMatchSnapshot();
  });
});