import React from 'react'
import user from '../assets/person.jpg'
import logo from '../assets/logo.png'
const Navbar = () => {
    return (
        <div className='navbar'>
            <span className="logo">
                <img src={logo} alt="logo" />
            </span>
            <div className="user">
                <img src={user} alt="user" />
                <span>Neima</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar
