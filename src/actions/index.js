export const setUserId = userId => ({type: 'SET_USER_ID', userId })
export const unsetUserId = () => ({type: 'UNSET_USER_ID' })
export const dataLoaded = () => ({type: 'SET_LOADING_STATE', value: false})
// CONFIG
// constants
export const RESET_CONFIG_STATE = 'RESET_CONFIG_STATE'
export const RESET_CONFIG_ERROR = 'RESET_CONFIG_ERROR'
// action creators
export const resetConfigState = () => ({type: RESET_CONFIG_STATE})
export const resetConfigError = () => ({type: RESET_CONFIG_ERROR})
