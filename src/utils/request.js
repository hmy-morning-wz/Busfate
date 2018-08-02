import axios from 'axios'
import * as CONFIG from './config'

// 返回请求
function httpResponse (res) {
  let ret = ''
  switch (res.code) {
    case '0':
      ret = res
      break
    case '200':
      ret = res
      break
    case '20000':
      ret = res
      break
    case '40004':
      ret = res
      break
    default:
    //   location.href = 'error'
  }
  return ret
}

/**
 * http请求
 * @param  opts = {url : '/test', method: 'GET', queryString: '?a=12345', data}
 * @return {[res = res || false]}
 * */
export async function request (opts) {
  let response = {}
  let _opts = Object.assign({
    baseURL: CONFIG.baseURL,
    method: 'GET',
    queryString: ''
  }, opts)
  // console.log(_opts)

  let http = new Promise((resolve, reject) => {
    axios({
      timeout: 10000 || opts.timeout,
      headers: {'Content-Type': 'application/json; charset=UTF-8'} || opts.headers,
      crossDomain: true,
      withCredentials: true || opts.withCredentials,
      ..._opts
    })
      .then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
  })

  await http.then(function (res) {
    // success
    if (res.status === 200) response = res.data
  }, function (err) {
    // failure
    console.log(err)
    response = {
      err: err,
      errMsg: '请求超时或请求无响应',
      code: 1
    }
  })
  return httpResponse(response)
}
