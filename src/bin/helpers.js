export const handleFetchErrors = (response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

export const format = (type, str) => {
  switch (type) {
    case 'phoneNumber':
      return `(${str.substr(0, 3)}) ${str.substr(3, 3)}-${str.substr(6, 4)}`
    default:
      return ''
  }
}
