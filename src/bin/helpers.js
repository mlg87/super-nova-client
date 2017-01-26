import moment from 'moment'

export const handleFetchErrors = (response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

export const format = (type, val) => {
  if (!val) return val
  switch (type) {
    case 'phoneNumber':
      return `(${val.substr(0, 3)}) ${val.substr(3, 3)}-${val.substr(6, 4)}`
    case 'date':
      // convert a date to moment if it's not a moment already
      const momentVal = moment.isMoment(val) ? val : moment(val)
      return momentVal.format('MM/DD/YYYY')
    default:
      return ''
  }
}
