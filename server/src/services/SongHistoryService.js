import Api from './Api'

export default {
  index (params) {
    return Api().get('histories', { params: params })
  },
  post (history) {
    return Api().post('histories', history)
  }
}
