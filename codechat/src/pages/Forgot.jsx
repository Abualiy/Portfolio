import React, { useState } from "react";
import logo from "../asset/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth"


const Forgot = () => {
     // State for error message and navigation
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailVal = e.target.email.value;

        // Send a password reset email
        sendPasswordResetEmail(auth, emailVal)
            .then(() => {
                // Redirect to the 'alert' page after successful email send
                navigate("/alert")
            })
            .catch(err => {
                 // Handle errors, such as user not found or other issues
                if (err.code === "auth/user-not-found") {
                    setError("User not found. Please check your email.");
                } else {
                    setError("Something went wrong. Please try again later.");
                }
            })
    }

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
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="email" placeholder="Email" name="email" />
                    <button>Reset</button>
                    {error && <span style={{ color: "red" }}>{error}</span>}
                </form>
                <div className="link">
                    <p>
                        Back to <Link className="link" to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Forgot
