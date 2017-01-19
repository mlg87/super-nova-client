import ReservationsDateSelect from './ReservationsDateSelect'
import React from 'react';
import { shallow } from 'enzyme';

describe('ReservationsDateSelect', () => {
  const setup = () => {
    return shallow(<ReservationsDateSelect />)
  }

  it('renders without crashing', () => {
    setup()
  })

  it('contains a centered DateSelect', () => {
    const wrapper = setup()
    const center = wrapper.find('Center')
    expect(center.length).toBe(1)
    expect(center.find('Connect').length).toBe(1)
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
