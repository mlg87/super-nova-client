import { isLoading } from '../isLoading'

describe('is loading in reducer', () => {
  it('should init in a loading state', () => {
    expect(
      isLoading(undefined, {})
    ).toEqual(true)
  })

  it('should set logged in state', () => {
    const action = {
      type: 'SET_LOADING_STATE',
    }
    expect(
      isLoading(undefined, {...action, value: true})
    ).toEqual(true)

    expect(
      isLoading(false,  {...action, value: true})
    ).toEqual(true)

    expect(
      isLoading(true,  {...action, value: true})
    ).toEqual(true)

    expect(
      isLoading(true,  {...action, value: false})
    ).toEqual(false)

    expect(
      isLoading(false,  {...action, value: false})
    ).toEqual(false)
  })

  it('should return current state on default', () => {
    const action = {
      type: 'OTHER_ACTION',
      value: false
    }
    expect(
      isLoading(true, action)
    ).toEqual(true)
  })
})
