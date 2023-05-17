import '../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';



export default function Header() {
    const endDecorator = <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
    return <>
        <div className='container'>
            <a href="/"><img className='logo-shop' src={require("../assets/images/logo_shop.jpg")} alt="logo shop" /></a>
            <div className='search-input'>
            <Input endDecorator={endDecorator} placeholder="Search" ></Input>
            </div>
            <div className='user-infor'>
                <i class="fa-solid fa-user fa-xl"></i>
                <div className='user-login-option'>
                    <a href="/login">Login</a>
                    <a href="/signup">Sign Up</a>
                </div>
            </div>

            <div className='cart'>
                <i class="fa-solid fa-cart-shopping fa-xl"></i>
                <p>Cart</p>
            </div>
        </div>
    </>
}

