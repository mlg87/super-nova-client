import ReservationsInventorySelect from './ReservationsInventorySelect'
import React from 'react';
import { shallow } from 'enzyme'

describe('ReservationsInventorySelect', () => {
  const setup = () => {
    return shallow(<ReservationsInventorySelect />)
  }

  it('renders without crashing', () => {
    setup()
    expect(true).toBeTruthy()
  })
})
