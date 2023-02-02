import { generateAbsPath, METHODS } from '.'

const AUTH_SERVICE_BASE_URL = generateAbsPath('/api/v1/auth')
const CLIENT_DATA_BASE_URL = generateAbsPath('/api/v1')

export const POST_LOGIN_CRED = {
  endpoint: `${AUTH_SERVICE_BASE_URL}/login`,
  method: METHODS.post,
  successStatusCode: 200
}
