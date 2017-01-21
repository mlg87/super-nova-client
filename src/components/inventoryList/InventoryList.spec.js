import React from 'react'
import { shallow } from 'enzyme'
import { InventoryList } from './InventoryList'

describe('InventoryList', () => {
  const setup = () => {
    const props = {
      fetchInventory: jest.fn()
    }
    return shallow(<InventoryList {...props} />)
  }

  it('renders without crashing', () => {
    setup()
    expect(true).toBe(true)
  })

  it('contains a wrapper div with a flexbox grid', () => {
    const wrapper = setup()
    const div = wrapper.find('div')
    expect(div.length).toBe(1)
    expect(div.props().style).toEqual({
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    })
  })

  it('contains a GridList', () => {
    const wrapper = setup()
    const gridList = wrapper.find('GridList')
    expect(gridList.length).toBe(1)
    const gridListProps = gridList.props()
    expect(gridListProps.cellHeight).toBe(180)
    expect(gridListProps.style).toEqual({
      width: 500,
      height: 450,
      overflowY: 'auto'
    })

  })
})
