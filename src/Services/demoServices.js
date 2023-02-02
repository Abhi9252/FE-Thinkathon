import { customHeaders } from '.'
import { POST_LOGIN_CRED } from './endpoint'

export const demoServices = {
  getItSystems: () =>
    fetch(POST_LOGIN_CRED.endpoint, {
      method: POST_LOGIN_CRED.method,
      headers: customHeaders(token)
    })
      .then(resp => {
        return resp.json()
      })
      .catch(err => console.log(err))
}
