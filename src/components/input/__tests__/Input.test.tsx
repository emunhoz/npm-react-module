import * as React from 'react'
import { render } from 'test-utils'
import { Input } from '../'

describe('[Component]: Input', () => {
  it('render the component', () => {
    expect(
      render(<Input value={'John Doe'} placeholder={'Name'} label={'Nome'} onChange={() => {}} />)
    ).toMatchSnapshot()
  })
})
