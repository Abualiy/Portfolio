import React, { useContext } from 'react'
import logo from "../asset/logo.png"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'


const Navbar = () => {
    const { currentUser } = useContext(AuthContext)

    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
                <span className='logotitle'><span style={{ color: "#0d171a" }}>CODE</span><span style={{ color: "#01bdf7" }}>CHAT</span></span>
            </div>
            <div className='user '>
                <div className="profile">
                    <img src={currentUser.photoURL} alt="profile" />
                    <span>{currentUser.displayName}</span>
                </div>
                <button onClick={() => signOut(auth)}>logout</button>
            </div>
        </div>
    )
}

export default Navbar