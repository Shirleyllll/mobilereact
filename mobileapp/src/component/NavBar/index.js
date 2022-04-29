import React from 'react';
import Icon from '@/component/Icon'
import styles from './index.module.scss'
import { useHistory } from 'react-router';
// import { withRouter } from 'react-router-dom' 
//1. withRouter 的使用
// history match location:这个组件必须是通过路由配置的
//自己渲染的组件，无法获取到路由信息 

//2. 路由提供了几个和路由相关的hook
// useHistory useLocation useParams
const NavBar = ({ children, extra }) => {
    const history = useHistory()

    const back = () => {
        //跳回上一页
        console.log(history)
        history.go(-1)
    }
    return (
        <div className={styles.root}>
            {/* 后退按钮 */}
            <div className="left">
                <Icon type="iconfanhui" onClick={back}></Icon>
            </div>

            <div className="title">{ children }</div>
            <div className="right">{ extra }</div>

        </div>
    );
}

// export default withRouter(NavBar);
export default NavBar;

