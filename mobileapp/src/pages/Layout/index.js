import React from 'react';
import styles from './index.module.scss'
import Icon from '@/component/Icon'
import { useHistory, useLocation } from 'react-router';
import classNames from 'classnames';
const tabBar = [
    {
        title:'首页',
        icon: 'iconbtn_home',
        path: '/home'
    },
    {
        title:'问答',
        icon: 'iconbtn_qa',
        path: '/home/qa'
    },
    {
        title:'视频',
        icon: 'iconbtn_video',
        path: '/home/video'
    },
    {
        title:'我的',
        icon: 'iconbtn_mine',
        path: '/home/profile'
    },
]
export default function Home() {
    const history = useHistory()
    const location = useLocation()
    return (
        <div className={styles.root}>
            {/* 区域一：点击按钮切换显示内容的区域 */}
            <div className="tab-content"></div>
            {/* 区域二：按钮区域，会使用固定定位显示在页面底部 */}
            <div className="tabbar">
                {
                    tabBar.map(item => (
                        <div className={classNames("tabbar-item", location.pathname === item.path ? 'tabbar-item-active' : '')} key={item.title} onClick={() => history.push(item.path)}>
                            <Icon type={location.pathname === item.path ? item.icon + '_sel' : item.icon}></Icon>
                            <span>{item.title}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
