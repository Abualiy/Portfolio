import logo from '../asset/logo.png';
import React, { useState, useEffect } from 'react';
// import App from '../App';
import { Navigate } from 'react-router-dom';


function SplashScreen() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return visible ? (
        <div className="main">
            <header className="header">
                <img src={logo} className="logo" alt="logo" />
                <p>
                    <code className="welcome-text">
                        <span className="light-blue">Welcome </span>
                        <span className="dark-yellow">to </span>
                        <span className="App-name-first">CODE</span>
                        <span className="App-name">CHAT</span>
                        <span>;</span>
                    </code>
                </p>
                <div className='loading'>
                    <div className="loader"></div>
                    <code><span className='percent'>Loading...</span></code>
                </div>
            </header>
        </div>
    ) : <Navigate to="/" />;
}

export default SplashScreen;