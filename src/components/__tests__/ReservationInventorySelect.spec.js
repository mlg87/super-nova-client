import { ReservationInventorySelect } from '../ReservationInventorySelect'
import React from 'react';
import { shallow } from 'enzyme'
import { InventoryList } from 'components/InventoryList'

describe('ReservationInventorySelect', () => {
  const setup = () => {
    const props = {
      selectedInventory: [],
      fetchInitialInventory: jest.fn()
    }
    return shallow(<ReservationInventorySelect {...props} />)
  }

  it('renders without crashing', () => {
    setup()
    expect(true).toBeTruthy()
  })

})
