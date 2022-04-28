import React from 'react';
import Icon from '@/component/Icon'
const Login = () => {
    return (
        <div>
            我是login
            <Icon type="iconfanhui" style={{fontSize: 100}} onClick={() => alert('哈哈哈')}/>
        </div>
    );
}

export default Login;
