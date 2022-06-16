import http from '@/utils/request'
import { SAVE_USER } from '../action_types/profile'

/**
 * 保存用户信息
 * @param {*} payload 
 * @returns 
 */
export const saveUser = (payload) => {
    return {
        type: SAVE_USER,
        payload
    }
}

/**
 * 获取用户信息
 * @returns Promise
 */
export const getUser = () => {
    return async dispatch => {
        const res = await http.get('/user')
        dispatch(saveUser(res.data))
    }
}