import React from 'react';
import { shallow, mount } from 'enzyme';
import { DateSelect } from './DateSelect';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import moment from 'moment'

const setup = (defineDates = true) => {
  const props = defineDates ? {
    startDate: moment('09/16/1968', 'MM/DD/YYYY'),
    endDate: moment('02/25/1988', 'MM/DD/YYYY'),
    dateChange: jest.fn()
  } : {

  }
  const enzymeWrapper = shallow(<DateSelect {...props} />)

  return { props, enzymeWrapper }
}

describe('DateSelect Component', () => {
  it('renders without crashing', () => {
    mount(
      <DateSelect />
    );
  });

  it('renders a header', () => {
    const { enzymeWrapper } = setup()
    const header = enzymeWrapper.find('h1')
    expect(header.length).toBe(1)
    expect(header.text()).toBe('Choose dates to start a reservation')
    expect(header.props().style).toEqual({textAlign: 'center'})
  })

  it('renders 2 inputs centered above the calendar', () => {
    const { enzymeWrapper } = setup()
    const inputContainer = enzymeWrapper.find('.input-container')
    const inputs = inputContainer.find('input')
    expect(inputContainer.props().style).toEqual({
      display: 'flex',
      justifyContent: 'space-around'
    })

    expect(inputs.length).toBe(2)
    expect(inputs.first().hasClass('start-date-display')).toBe(true)
    expect(inputs.last().hasClass('end-date-display')).toBe(true)
    expect(inputs.map((input) => {
      const props = input.props()
      expect(props.type).toBe('text')
      expect(props.readOnly).toBe(true)
      expect(props.style).toEqual({
        height: '25px',
        width: '45%',
        fontSize: '1rem',
        textAlign: 'center'
      })
    }))
  })

  it('displays the formatted start and end date in inputs above the calendar', () => {
    const { enzymeWrapper } = setup()
    const startDateDisplay = enzymeWrapper.find('.start-date-display')
    const endDateDisplay = enzymeWrapper.find('.end-date-display')
    const calendar = enzymeWrapper.find('DateRange')

    expect(startDateDisplay.props().value).toEqual('Monday, 16 September 1968')
    expect(endDateDisplay.props().value).toEqual('Thursday, 25 February 1988')

  })

  it('displays empty values if no dates supplied', () => {
    const { enzymeWrapper } = setup(false)
    const startDateDisplay = enzymeWrapper.find('.start-date-display')
    const endDateDisplay = enzymeWrapper.find('.end-date-display')
    expect(startDateDisplay.props().value).toBe('')
    expect(endDateDisplay.props().value).toBe('')
  })
})
