import React, { useState } from "react";
import Add from "../asset/addAvatar.png";
import logo from "../asset/logo.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const firstName = e.target[0].value;
        const lastName = e.target[1].value;
        const displayName = e.target[2].value;
        const email = e.target[3].value;
        const password = e.target[4].value;
        const file = e.target[5].files[0];

        // Check for empty fields
        if (!firstName || !lastName || !displayName || !email || !password ) {
            setErr("All fields are required.");
            setLoading(false);
            return;
        }

        try {
            // Check if the username is already taken
            const usernameDoc = await getDoc(doc(db, "usernames", displayName));
            if (usernameDoc.exists()) {
                setErr("Username is already taken.");
                setLoading(false);
                return;
            }

            setLoading(true);

            const res = await createUserWithEmailAndPassword(auth, email, password);

            const storageRef = ref(storage, `${displayName}`);

            const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
            uploadTask.on(
                (error) => {
                    console.error("Error from photo:", error);
                    setErr("Something went wrong while uploading the photo.");
                    setLoading(false);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            displayName, // Set displayName to the username
                            photoURL: downloadURL,
                        });

                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            firstName,
                            lastName,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });

                        await setDoc(doc(db, "usernames", displayName), {
                            uid: res.user.uid,
                        });

                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        setLoading(false);
                        navigate("/SplashScreen");
                    });
                }
            );
        } catch (err) {
            console.error("Error from inputs:", err);
            setErr("Something went wrong during registration.");
            setLoading(false);

        }
    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <div className="title">Register</div>
                <div className="logo">
                    <img src={logo} alt="" />
                    <span>
                        <span style={{ color: "#0d171a" }}>CODE</span>
                        <span style={{ color: "#01bdf7" }}>CHAT</span>
                    </span>
                </div>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input style={{ display: "none " }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="Add an avatar" />
                        <span>Add Profile Picture</span>
                    </label>
                    <button disabled={loading}>
                        {loading ? "Uploading..." : "Sign up"}
                    </button>
                    {err && <span style={{ color: "red" }}>{err}</span>}
                </form>
                <p>
                    Already have an account? <Link className="link"  to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
