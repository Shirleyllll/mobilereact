import request from '@/utils/request'

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
        console.log(res)
    }
}