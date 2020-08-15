import axios from 'axios'

// axios.defaults.baseURL = "http://xiaomiao.club:6677";

axios.defaults.withCredentials = true;

axios.defaults.headers = {
  'Content-Type': 'application/json'
}

export const request = axios;
export default {
  get(url) {
    return new Promise((resolve, reject) => {
      axios({
        methods: 'get',
        url
      }).then(res => {
        resolve(res);
      }).catch(e => reject(e))
    })
  },
  post(url,params) {
    return new Promise((resolve, reject) => {
      axios({
        methods: 'post',
        url,
        data: params
      }).then(res => {
        resolve(res)
      }).catch(e => reject(e))
    })
  }
}