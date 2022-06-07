import axios from 'axios'

const instance = axios.create({
    timeout: 5000,
    baseURL: 'http://geek.itheima.net/v1_0'
})

//配置拦截器
instance.interceptors.request.use(
    config => {
        //对config做点什么
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
        return Promise.reject(err)
    }
)
export default instance