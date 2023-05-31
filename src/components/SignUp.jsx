import "../styles/login.css"
import { useRef } from 'react'
import * as EmailValidator from 'email-validator';

export default function SignUp() {
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const rePasswordRef = useRef("")

    async function signup() {
        let email = emailRef.current.value
        let password = passwordRef.current.value
        let rePassword = rePasswordRef.current.value

        if (email == "") {
            alert("Email/số điện thoại không được để trống!")
            return
        }

        if (password == "" || password.length < 6) {
            alert("Mật khẩu không được để trống!")
            return
        }

        if (rePassword != password) {
            alert("Mật khẩu chưa trùng khớp!")
            return
        }

        let body 
        if (EmailValidator.validate(email)){
            body = "email=" + email + "&password=" + password + "&active=" + 1
        } else {
            body = "phoneNumber=" + email + "&password=" + password + "&active=" + 1
        }
        
        fetch("http://localhost:8080/user/add", {
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: body
        })
    }

    return <>
        <div className='header-login'>
            <a href="/">
                <img className='logo-shop' src={require("../assets/images/logo_shop.jpg")} alt="logo shop" />
                <p>QT-Computer</p>
            </a>
            <p>Đăng ký</p>
        </div>

        <div className="login-body">

            <div className="form-login">
                <label htmlFor="title" className="title-form">Đăng ký</label>
                <input type="text" placeholder='Email/Số điện thoại' ref={emailRef} id='email' />
                <input type="password" placeholder='Mật khẩu' ref={passwordRef} id='password' />
                <input type="password" placeholder='Nhập lại mật khẩu' ref={rePasswordRef} id='re-password' />
                <button onClick={signup} >Đăng ký</button>
                <p>
                    Bạn đã có tài khoản?
                    <a href="/login">Đăng nhập</a>
                </p>
            </div>
        </div>
    </>
}