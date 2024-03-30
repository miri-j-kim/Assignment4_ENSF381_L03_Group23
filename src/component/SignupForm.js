import React, { useState } from 'react';
import LoginForm from './LoginForm';

function SignupForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [authMessage, setAuthMessage] = useState("");
    const [showLogin, setshowLogin] = useState(false);

    function handleAuthenication() {
        if (!username || !password || !confirmPassword) {
            if (password !== confirmPassword){
                setAuthMessage("All fields required. \nPassword and confirmPassword have to match");
            }
            else{
                setAuthMessage("All fields required");
            }

        }
        else{
            if (password !== confirmPassword){
                setAuthMessage("Password and confirmPassword have to match");
            }
            else{
                fetch('http://localhost:5000/Login',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({'username':username, 'password':password, 'email':email}),
                })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Registration failed');
                    }
                })
                .then(data => setAuthMessage(data.registrationMessage))
                .catch(error => setAuthMessage(error));
            }
        }
    };

    function gotoLoginForm(){
        setshowLogin(true);
    }
    
    if(showLogin) {
        return <LoginForm />;
    }

    return (
        <div>
            <h1>Signup</h1>
            <p style={{ color: "red" }}>{authMessage}</p>
            <label>Username: </label>
            <input type="text" onChange={(e)=> setUsername(e.target.value)} placeholder='Enter your username'/> <br/>
            <label>Password: </label>
            <input type="password" onChange={(e)=> setPassword(e.target.value)}placeholder='Enter your password'/> <br/>
            <label>Confirm Password: </label>
            <input type="password" onChange={(e)=> setConfirmPassword(e.target.value)} placeholder='Comfirm your password'/> <br/>
            <label>Email: </label>
            <input type="text" onChange={(e)=> setEmail(e.target.value)} placeholder='Enter your email'/> <br/>
            <button onClick={handleAuthenication}>Sign Up</button> <br/>
            <button onClick={gotoLoginForm}>Switch to Login</button>
        </div>
    );
};
export default SignupForm;