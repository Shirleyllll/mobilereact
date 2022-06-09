const TOKEN_KEY = 'geek-itcast'

/**
 * 
 * 从本地缓存中获取Token信息
 */
export const getTokenInfo = () => {
    return JSON.parse(localStorage.getItem(TOKEN_KEY)) || {}
}

/**
 * 将token信息存入缓存
 * @param {Object} tokenInfo 
 */
export const setTokenInfo = (tokenInfo) => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(tokenInfo))
}

/**
 * 删除token
 */
export const removeTokenInfo = () => {
    localStorage.removeItem(TOKEN_KEY)
}

/**
 * 
 * 判断本地缓存中是否存在token信息
 */
export const hasToken = () => {
    return !!getTokenInfo().token
}
