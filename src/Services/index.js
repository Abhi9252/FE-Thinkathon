export const headerContent = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

var token = localStorage.getItem('token')

export const headerContentWithAuthorization = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`
}

export const customHeaders = token => {
  let copiedHeaderContentWithAuthorization = {
    ...headerContentWithAuthorization
  }
  copiedHeaderContentWithAuthorization['Authorization'] = `Bearer ${token}`
  return copiedHeaderContentWithAuthorization
}

export const generateAbsPath = relativePath =>
  `${process.env.REACT_APP_LOCAL_BASE_URL?.replace(
    /\/$/,
    ''
  )}/${relativePath.replace(/^\//, '')}`

export const METHODS = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  del: 'DELETE',
  patch: 'PATCH'
}
