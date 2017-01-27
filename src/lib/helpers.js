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
      return moment(val).format('MM/DD/YYYY')
    case 'timestamp':
      return moment(val).format('MM/DD/YYYY h:mma')
    default:
      return ''
  }
}
