import request from '../util/request';

// 用户登录
export function userLogin(data){
  return request({
    url: '/user/login',
    methods: 'post',
    data
  })
}