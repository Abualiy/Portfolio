import React from 'react'
import user from '../asset/person.jpg'
import logo from '../asset/logo.png'
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
