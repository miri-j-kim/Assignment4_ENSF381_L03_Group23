import React, { useState } from 'react';
import SignupForm from './SignupForm.js';

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authMessage, setAuthMessage] = useState("");
    const [showSignup, setShowSignup] = useState(false);
    
    function handleAuthenication() {
        if (!username || !password) {
            setAuthMessage("All fields required");
        }
        else{
            fetch('http://localhost:5000/Login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({'username':username, 'password':password}),
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Authentication failed');
                }
            })
            .then(data => setAuthMessage(data.authMessage))
            .catch(error => setAuthMessage('Authentication failed. Incorrect username or password.'));
    }console.log(authMessage)
    };

    function gotoSignupForm() {
        setShowSignup(true); 
    }

    if (showSignup) {
        return <SignupForm />; 
    }

    return (
        <div>
            <h1>Login</h1>
            <p style={{ color: "red" }}>{authMessage}</p>

            <label>Username: </label>
            <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Enter your username'
            />
            <br />

            <label>Password: </label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your password'
            />
            <br />

            <button onClick={handleAuthenication}>Login</button> <br />
            <button onClick={gotoSignupForm}>Switch to Signup</button>
        </div>
    );
};

export default LoginForm;