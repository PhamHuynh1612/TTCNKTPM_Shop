import { useRef } from 'react'
import { json } from 'react-router'
import '../styles/login.css'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    async function login() {
        let email = emailRef.current.value
        let password = passwordRef.current.value
        console.log(email)
        console.log(password)
        let result = await fetch("http://localhost:8080/user/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: {
                "email": email,
                "phoneNumber": email,
                "password": password,
            },
        }).then(r => console.log(r))
    }




    return <>
        <div className='header-login'>
            <a href="/">
                <img className='logo-shop' src={require("../assets/images/logo_shop.jpg")} alt="logo shop" />
                <p>QT-Computer</p>
            </a>
            <p>Đăng nhập</p>
        </div>

        <div className="login-body">

            <div className="form-login">
                <label htmlFor="title" className="title-form">Đăng nhập</label>
                <input type="text" placeholder='Email/Số điện thoại' ref={emailRef} id='email' />
                <input type="password" placeholder='Mật khẩu' id='password' ref={passwordRef} />
                <button onClick={login}  >Đăng nhập</button>
                <p>
                    Bạn chưa có tài khoản?
                    <a href="/signup">Đăng ký</a>
                </p>
            </div>
        </div>
    </>
}