import React, { useState } from 'react'
import pro from '../assets/pro-pic.png'
import logo from '../assets/logo.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
  
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">
                    <img src={logo} alt="logo" />
                </span>
                <span className="title">Register</span>
                <form action="" >
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Your Email' />
                    <input type="password" placeholder='Password' />
                    <input type="file" id='file' style={{ display: 'none' }} />
                    <label htmlFor="file">
                        <img src={pro} alt="profile picture" />
                        <span>Add Profile Picture</span>
                    </label>
                    <button>Sign up</button>
                    </form>
                <p>Already have an Account? Login</p>
            </div>
        </div>
    )
}

export default Register
