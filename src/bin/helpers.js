export const handleFetchErrors = (response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}
