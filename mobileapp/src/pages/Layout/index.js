import React from 'react';
import styles from './index.module.scss'
import Icon from '@/component/Icon'
import { useHistory, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Switch, Route } from 'react-router-dom';
const Home = React.lazy(() => import('@/pages/Home'))
const QA = React.lazy(() => import('@/pages/QA'))
const Video = React.lazy(() => import('@/pages/Video'))
const Profile = React.lazy(() => import('@/pages/Profile'))

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
export default function Layout() {
    const history = useHistory()
    const location = useLocation()
    return (
        <div className={styles.root}>
            {/* 区域一：点击按钮切换显示内容的区域 */}
            <div className="tab-content">
                {/* 配置耳机路由，只要用了路由懒加载，配合suspense一起使用 */}
                <React.Suspense fallback={<div>loading...</div>}>
                    <Switch>
                        <Route path="/home" exact component={Home}></Route>
                        <Route path="/home/QA" component={QA}></Route>
                        <Route path="/home/Video" component={Video}></Route>
                        <Route path="/home/Profile" component={Profile}></Route>
                    </Switch>
                </React.Suspense>

            </div>
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
