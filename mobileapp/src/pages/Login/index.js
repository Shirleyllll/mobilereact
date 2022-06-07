import NavBar from '@/component/NavBar'
import { useFormik } from 'formik';
import styles from './index.module.scss'
import Input from '@/component/Input'
import * as Yup from 'yup'
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { login, sendCode } from '@/store/actions/login';
import { Toast } from 'antd-mobile';
import { useState } from 'react';
const Login = () => {
    const dispatch = useDispatch()
    const [time, setTime] = useState(0)
    const onExtraClick = async () => {
        if (time > 0) return
        //手机号验证
        if(!/^1[3-9]\d{9}$/.test(mobile)){
            formik.setTouched({
                mobile: true
            })
            return
        }
        try {
            await dispatch(sendCode(mobile))
            Toast.success('获取验证码成功', 1)
            //开启倒计时
            setTime(60)
            let timeId = setInterval(() => {
                setTime((time) => {
                    if(time === 1) {
                        clearInterval(timeId)
                    }
                    return time - 1
                })

            }, 1000)
        }catch(error) {
            Toast.fail(error.response.data.message, 1)
        }
    }

    const formik = useFormik({
        initialValues: {
            mobile: '13912341234',
            code: '246810'
        },
        //当表单提交的时候会触发
        async onSubmit(values) {
            await dispatch(login(values))
            Toast.success('登录成功')
        },

        // validate(values) {
        //     const errors = {}
        //     if (!values.mobile) {
        //         errors.mobile='手机号不能为空'
        //     }
        //     if(!values.code) {
        //         errors.code = '验证码不能为空'
        //     }
        //     return errors
        // },
        validationSchema: Yup.object({
            mobile: Yup.string().required('手机号不能为空').matches(/^1[3-9]\d{9}$/, '手机号格式错误'),
            code: Yup.string().required('验证码不能为空').matches(/^\d{6}$/,'验证码格式错误')
        })
    })
    const {
        values: {mobile, code},
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        touched,
        isValid
    } = formik
    return (
        <div className={styles.root}>
            {/* 导航条 */}
            <NavBar extra={'右侧内容'} >登录</NavBar>
            {/* 内容 */}
            <div className="content">
                <h3>短信登录</h3>
                <form onSubmit={handleSubmit}>
                    <div className="input-item">
                        <Input placeholder="请输入手机号" onBlur={handleBlur} value={mobile} onChange={handleChange} name="mobile" autoComplete="off"></Input>
                        {touched.mobile && errors.mobile ? (
                            <div className="validate">{errors.mobile}</div>
                        ) : null}
                    </div>
                    <div className="input-item">
                        <Input placeholder="请输入验证码" onBlur={handleBlur} value={code} extra={time === 0 ? '获取验证码' : time + 's后获取'} onExtraClick={onExtraClick} onChange={handleChange} name="code" autoComplete="off"></Input>
                        {touched.code && errors.code ? (
                            <div className="validate">{errors.code}</div>
                        ) : null}
                    </div>
                    <button type="submit" className={classNames('login-btn',{disabled: !isValid}) } disabled={!isValid}>
                        登录
                    </button>

                </form>
            </div>
        </div>


    );
}

export default Login;
