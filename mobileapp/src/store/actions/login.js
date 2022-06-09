import request from '@/utils/request'
import { setTokenInfo } from '@/utils/storage'
export const sendCode = (mobile) => {
    return async () => {
        await request({
            url: '/sms/codes/' + mobile,
            method: 'get'
        })
    }
}  

/**
 * 登录
 * @param {*} data 
 * @returns 
 */
export const login = (data) => {
    return async (dispatch) => {
        const res = await request({
            method: 'post',
            url: '/authorizations',
            data
        })
        //保存token到redux中
        dispatch(saveToken(res.data))
        //保存到本地
        setTokenInfo(res.data)
    }
}

export const saveToken = (payload) => {
    return {
        type: 'login/token',
        payload
    }
}