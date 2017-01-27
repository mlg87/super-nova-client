import ReservationDateSelect from './ReservationDateSelect'
import React from 'react';
import { shallow } from 'enzyme'
import { DateSelect } from 'components/dateSelect/DateSelect'
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

  it('contains a button that links to the next section', () => {
    const wrapper = setup()
    const link = wrapper.find('Center').find('Link')
    expect(link.length).toBe(1)

    const linkProps = link.props()
    expect(linkProps.to).toBe('/reservations/select-inventory')
    expect(linkProps.style).toEqual({
      float: 'right',
      marginTop: '10px'
    })

    const button = link.find('RaisedButton')
    expect(button.length).toBe(1)
    const buttonProps = button.props()
    expect(buttonProps.label).toBe('Next')
    expect(buttonProps.primary).toBeTruthy()

  })

})
