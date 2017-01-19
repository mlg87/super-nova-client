import React from 'react';
import { shallow } from 'enzyme';
import { DateSelect, mapStateToProps, mapDispatchToProps } from './DateSelect';
import moment from 'moment'
import mockDate from 'mockdate'
import { setStartDate, setEndDate } from 'actions'


describe('DateSelect Component', () => {
  const setup = (dates) => {
    const props = {
      ...dates,
      dateChange: jest.fn(),
    }

    const wrapper = shallow(<DateSelect {...props} />)
    return { props, wrapper }
  }

  it('renders without crashing', () => {
    setup()
  });

  it('renders a header', () => {
    const { wrapper } = setup()
    const header = wrapper.find('h1')
    expect(header.length).toBe(1)
    expect(header.text()).toBe('Choose dates to start a reservation')
    expect(header.props().style).toEqual({textAlign: 'center'})
  })

  it('renders 2 inputs centered above the calendar', () => {
    const { wrapper } = setup()
    const inputContainer = wrapper.find('.input-container')
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
    const { wrapper } = setup({
      startDate: moment('09/16/1968', 'MM/DD/YYYY'),
      endDate: moment('02/25/1988', 'MM/DD/YYYY')
    })
    const startDateDisplay = wrapper.find('.start-date-display')
    const endDateDisplay = wrapper.find('.end-date-display')
    const calendar = wrapper.find('DateRange')

    expect(startDateDisplay.props().value).toEqual('Monday, 16 September 1968')
    expect(endDateDisplay.props().value).toEqual('Thursday, 25 February 1988')

  })

  it('displays empty values if no dates supplied', () => {
    const { wrapper } = setup()
    const startDateDisplay = wrapper.find('.start-date-display')
    const endDateDisplay = wrapper.find('.end-date-display')
    expect(startDateDisplay.props().value).toBe('')
    expect(endDateDisplay.props().value).toBe('')
  })

  it('throws if dates are not moments', () => {
    expect(() => {
      setup({
        startDate: new Date('09/16/1968'),
        endDate: new Date('02/25/1988')
      })
    }).toThrowError('date selected must be a moment')
  })

  it('includes a DateRange component with the right props', () => {
    const startDate = moment('09/16/1968', 'MM/DD/YYYY')
    const endDate = moment('02/25/1988', 'MM/DD/YYYY')
    // we mock new Date() that's called by moment in the minDate prop
    mockDate.set(1)
    const { wrapper, props } = setup({ startDate, endDate })
    mockDate.reset()
    const dateRange = wrapper.find('DateRange')
    expect(dateRange.length).toBe(1)

    const dateRangeProps = dateRange.props()
    expect(dateRangeProps.startDate).toEqual(startDate)
    expect(dateRangeProps.endDate).toEqual(endDate)
    expect(dateRangeProps.onInit).toEqual(props.dateChange)
    expect(dateRangeProps.onChange).toEqual(props.dateChange)
    expect(moment(dateRangeProps.minDate).isSame(1)).toBeTruthy()
    expect(dateRangeProps.linkedCalendars).toBeTruthy()
  })
})

describe('mapStateToProps', () => {
  it('passes down start and end dates from the store if they exist', () => {
    const state = {
      reservationStartDate: 'startDate',
      reservationEndDate: 'endDate'
    }
    expect(mapStateToProps(state)).toEqual({
      startDate: 'startDate',
      endDate: 'endDate'
    })
  })

  it('passes down now moments if store is empty of the dates', () => {
    mockDate.set(1)
    const stateMap = mapStateToProps({})
    expect(moment(stateMap.startDate).isSame(1)).toBeTruthy()
    expect(moment(stateMap.endDate).isSame(1)).toBeTruthy()
    mockDate.reset()
  })
})

describe('mapDispatchToProps', () => {
  it('has a dateChange method that dispatches setStartDate and setEndDate', () => {
    const dispatch = jest.fn()
    const dates = {
      startDate: 'startDate',
      endDate: 'endDate'
    }
    mapDispatchToProps(dispatch).dateChange(dates)
    expect(dispatch.mock.calls.length).toBe(2)
    expect(dispatch.mock.calls[0][0]).toEqual(setStartDate('startDate'))
    expect(dispatch.mock.calls[1][0]).toEqual(setEndDate('endDate'))
  })
})
