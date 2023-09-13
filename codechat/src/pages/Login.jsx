import React from 'react'
import logo from '../assets/logo.png'
const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">
                    <img src={logo} alt="logo" />
                </span>
                <span className="title">Login</span>
                <form action="">
                    <input type="email" placeholder='Your Email' />
                    <input type="password" placeholder='Password' />

                    <button>Sign in</button>
                </form>
                <p>New for Code Chat? Signup</p>
            </div>
        </div>
    )
}

export default Login
