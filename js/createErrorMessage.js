const createErrorMessage = () => {
  const errorMessage = document.createElement('h1')
  errorMessage.className = 'error-message'
  errorMessage.innerText =
    "Oops! Something went wrong... Can't load data from server."

  return errorMessage
}

export default createErrorMessage
