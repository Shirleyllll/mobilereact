import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import React, { Suspense } from 'react'
import './App.scss'

const Login = React.lazy(() => import('@/pages/Login'))
const Home = React.lazy(() => import('@/pages/Home'))
const App = () => {
    return (
        <Router>
            <div className="app">
                {/* <Link to="/login">登录</Link>
                <Link to="/home">首页</Link> */}
                <Suspense fallback={<div>loading...</div>}>
                    <Switch>
                        <Redirect exact from="/" to="/home"></Redirect>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/home" component={Home}></Route>
                    </Switch>
                </Suspense>
            </div>
        </Router>
    )
}

export default App;
