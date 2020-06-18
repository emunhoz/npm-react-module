import React from 'react'
import { render } from 'test-utils'
import { FloatCard } from '../'

describe('Component: FloatCard', () => {
  it('render the component', () => {
    expect(
      render(<FloatCard imgUrl="https://www.parceiromagalu.com.br/img/icons/company.png">Hello world</FloatCard>)
    ).toMatchSnapshot()
  })

  it('render the component with block param', () => {
    expect(
      render(
        <FloatCard block imgUrl="https://www.parceiromagalu.com.br/img/icons/company.png">
          Hello world
        </FloatCard>
      )
    ).toMatchSnapshot()
  })
})
