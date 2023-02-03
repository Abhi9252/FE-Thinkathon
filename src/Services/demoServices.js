import { customHeaders } from '.'
import { POST_LOGIN_CRED } from './endpoint'
import axios from 'axios'

export const demoServices = {
  postItSystems: data =>
    axios
      .post(POST_LOGIN_CRED.endpoint, data)
      .then(resp => {
        console.log(resp)
      })
      .catch(err => console.log(err))
}