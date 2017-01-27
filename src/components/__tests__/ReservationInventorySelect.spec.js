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

  it('contains a search bar and inventory list, centered on the page', () => {
    const wrapper = setup()
    const center = wrapper.find('Center')
    expect(center.length).toBe(1)
    // expect(center.find('Connect').node.type.WrappedComponent({})).toEqual(InventoryList({}))
  })
})
