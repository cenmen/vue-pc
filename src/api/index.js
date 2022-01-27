import { message } from 'ant-design-vue'
import axios from 'axios'
const proxy = {
  development: '/dev',
  test: '/test',
  production: ''
}
/* 搭配本地代理使用 */
axios.defaults.baseURL = location.origin + (proxy[ENV] || '')

const request = async (...options) => {
  try {
    const {data} = await axios(...options)
    return data
  } catch (error) {
    console.log('==> error', error.response)
    const {data} = error.response
    message.error(data)
  }
}

const getDataList = (limit) => {
  return request({
    url: '/list',
    params: {
      limit
    }
  })
}

export default {
  getDataList
}