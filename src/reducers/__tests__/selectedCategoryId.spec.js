import { selectedCategoryId } from '../selectedCategoryId'

describe('selected category reducer', () => {
  it('should handle initial state', () => {
    expect(
      selectedCategoryId(undefined, {})
    ).toEqual(0)
  })

  it('should set inventory Categories', () => {
    const action = {
      type: 'SET_SELECTED_CATEGORY_ID',
      payload: 'hello'
    }

    expect(
      selectedCategoryId(undefined, {...action})
    ).toEqual('hello')

    expect(
      selectedCategoryId('hi',  {...action})
    ).toEqual('hello')
  })

  it('should return current state on default', () => {
    const action = {
      type: 'OTHER_ACTION',
      payload: 'dude'
    }
    expect(
      selectedCategoryId('chick', action)
    ).toEqual('chick')
  })
})
