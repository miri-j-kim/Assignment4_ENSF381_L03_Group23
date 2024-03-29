import React, { useState } from 'react';

function SignupForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [authMessage, setAuthMessage] = useState("");

    function handleAuthenication(){
        console.log("in progress");
        setAuthMessage("username: " + username + ", email: " + email);
    };
    return (
        <div>
            <h1>Signup</h1>
            <p>{authMessage}</p>
            <label>Username: </label>
            <input type="text" onChange={(e)=> setUsername(e.target.value)} /> <br/>
            <label>Password: </label>
            <input type="password" onChange={(e)=> setPassword(e.target.value)}/> <br/>
            <label>Confirm Password: </label>
            <input type="password" onChange={(e)=> setConfirmPassword(e.target.value)}/> <br/>
            <label>Email: </label>
            <input type="text" onChange={(e)=> setEmail(e.target.value)} /> <br/>
            <button onClick={handleAuthenication}>Login</button> <br/>
            <button>Switch to Login</button>
        </div>
    );
};
export default SignupForm;