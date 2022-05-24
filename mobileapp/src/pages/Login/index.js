import NavBar from '@/component/NavBar'
import styles from './index.module.scss'
import Input from '@/component/Input'
const Login = () => {
    const onExtraClick = () => {
        console.log(111)
    }
    return (
        <div className={styles.root}>
            {/* 导航条 */}
            <NavBar extra={'右侧内容'} >登录</NavBar>
            {/* 内容 */}
            <div className="content">
                <h3>短信登录</h3>
                <form>
                    <div className="input-item">
                        <Input placeholder="请输入手机号"></Input>
                        {/* <div className="validate">手机号验证错误信息</div> */}
                    </div>
                    <div className="input-item">
                        <Input placeholder="请输入验证码" extra="获取验证码" onExtraClick={onExtraClick}></Input>
                        {/* <div className="validate">验证码验证错误信息</div> */}
                    </div>
                    <button className="login-btn">
                        登录
                    </button>

                </form>
            </div>
        </div>


    );
}

export default Login;
