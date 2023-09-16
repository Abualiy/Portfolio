import React from "react";
import logo from "../asset/logo.png";
import { Link } from "react-router-dom";


const ForgetMessage = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <div className="logo">
                    <img src={logo} alt="" />
                    <span>
                        <span style={{ color: "#0d171a" }}>CODE</span>
                        <span style={{ color: "#01bdf7" }}>CHAT</span>
                    </span>
                </div>
                <div className="title">Forgot Password</div>
                <p style={{ color: "#fff" }}>Check your email for a password reset link.</p>
                <p style={{ color: "#fff" }}>Did you get the password reset link?</p>
                <div className="back">
                    <Link className="links" to={"/login"}>Yes, i got.</Link>
                    <Link className="links" to={"/reset"}>No, reset again!</Link>
                </div>
            </div>
        </div>
    )
}

export default ForgetMessage
