import { React, useState } from "react";
import logo from "../asset/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
   // State for error message and navigation
  const [error, setError] = useState("");
  const navigate = useNavigate();

   // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
       // Sign in with email and password using Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      console.error("Error from login:", err);
      // Check the error code and set the error message accordingly
      if (err.code === "auth/user-not-found") {
        setError("User not found. Please check your email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

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
        <div className="title">Login</div>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" name="email"/>
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
          {error && <span style={{ color: "red" }}>{error}</span>}
        </form>
        <div className="link">
          <p>
            You don't have an account? <Link className="link" to="/register">Register</Link>
          </p>
          <p>
            <Link className="link"  to="/reset">Forgot Password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
