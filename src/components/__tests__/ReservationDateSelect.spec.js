import ReservationDateSelect from '../ReservationDateSelect'
import React from 'react';
import { shallow } from 'enzyme'
import { DateSelect } from 'components/DateSelect'
import mockDate from 'mockdate'

describe('ReservationDateSelect', () => {
  const setup = () => {
    return shallow(<ReservationDateSelect />)
  }

  it('renders without crashing', () => {
    setup()
  })

  it('contains a centered DateSelect', () => {
    const wrapper = setup()
    const center = wrapper.find('Center')
    expect(center.length).toBe(1)
    expect(center.find('Connect').length).toBe(1)
    mockDate.set(1)
    expect(center.find('Connect').node.type.WrappedComponent({})).toEqual(DateSelect({}))
    mockDate.reset()
  })

})
