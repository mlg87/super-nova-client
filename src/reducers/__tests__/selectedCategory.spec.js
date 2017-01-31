import { selectedCategory } from '../selectedCategory'

describe('selected category reducer', () => {
  it('should handle initial state', () => {
    expect(
      selectedCategory(undefined, {})
    ).toEqual('')
  })

  it('should set inventory Categories', () => {
    const action = {
      type: 'SET_SELECTED_CATEGORY',
      payload: 'hello'
    }

    expect(
      selectedCategory(undefined, {...action})
    ).toEqual('hello')

    expect(
      selectedCategory('hi',  {...action})
    ).toEqual('hello')
  })

  it('should return current state on default', () => {
    const action = {
      type: 'OTHER_ACTION',
      payload: 'dude'
    }
    expect(
      selectedCategory('chick', action)
    ).toEqual('chick')
  })
})
