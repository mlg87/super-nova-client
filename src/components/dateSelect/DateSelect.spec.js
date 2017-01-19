import React from 'react';
import { shallow, mount } from 'enzyme';
import { DateSelect } from './DateSelect';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const setup = () => {
  const props = {}
  return shallow(<DateSelect {...props} />)
}

describe('DateSelect Component', () => {
  it('renders without crashing', () => {
    mount(
      <DateSelect />
    );
  });

  it('renders a header', () => {
    const enzymeWrapper = setup()
    const header = enzymeWrapper.find('h1')
    expect(header.length).toBe(1)
    expect(header.text()).toBe('Choose dates to start a reservation')
    expect(header.props().style).toEqual({textAlign: 'center'})
  })

})
