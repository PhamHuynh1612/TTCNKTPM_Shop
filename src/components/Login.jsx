import '../styles/login.css'

export default function Login() {
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
                <input type="text" placeholder='Email/Số điện thoại' />
                <input type="text" placeholder='Mật khẩu' />
                <button type='submit'>Đăng nhập</button>
                <p>
                    Bạn chưa có tài khoản?
                    <a href="/signup">Đăng ký</a>
                </p>
            </div>
        </div>
    </>
}