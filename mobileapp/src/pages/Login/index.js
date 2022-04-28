import React from 'react';
import Icon from '@/component/Icon'
import styles from './index.module.scss'
const Login = () => {
    return (
        <div className={styles.root}>
            {/* 后退按钮 */}
            <div className="left">
                <Icon type="iconfanhui"></Icon>
            </div>

            <div className="title">我是标题</div>
            <div className="right">右侧内容</div>

        </div>
    );
}

export default Login;
