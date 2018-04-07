import axios from 'axios'
import store from '/Users/zaidsaeed/Desktop/tab-tracker/client/src/store/store.js'
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`,
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  })
}
