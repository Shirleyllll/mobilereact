import { Toast } from 'antd-mobile'
import axios from 'axios'
import { getTokenInfo } from './storage'

const instance = axios.create({
    timeout: 5000,
    baseURL: 'http://geek.itheima.net/v1_0'
})

//配置拦截器
instance.interceptors.request.use(
    config => {
        //对config做点什么
        const token  = getTokenInfo().token
        if (token) {
            config.headers.Authorization = 'Bearer ' + token
        }
        return config
    }, 
    error => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response => {
        //对响应做点什么
        return response.data
    },
    err => {
        if (err.response) {
            Toast.info(err.response.data.message)
        } else {
            Toast.info('网络繁忙，请稍后重试')
        }
        return Promise.reject(err)
    }
)
export default instance