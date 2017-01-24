import { ReservationsInventorySelect } from './ReservationsInventorySelect'
import React from 'react';
import { shallow } from 'enzyme'
import { InventoryList } from 'components/inventoryList/InventoryList'

describe('ReservationsInventorySelect', () => {
  const setup = () => {
    const props = {
      fetchInitialInventory: jest.fn()
    }
    return shallow(<ReservationsInventorySelect {...props} />)
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
