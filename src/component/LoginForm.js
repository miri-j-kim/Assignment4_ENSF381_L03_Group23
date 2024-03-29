import React, {useState} from 'react';

function LoginForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authMessage, setAuthMessage] = useState("");

    function handleAuthenication(){
        if ( !username | !password ){
            setAuthMessage("All fields required")
        }
        else {
            setAuthMessage("Login Successful")
        }
        console.log("in progress");
    };
    return (
        <div>
            <h1>Login</h1>
            <p style={{color:"red"}}>{authMessage}</p>
            <label>Username: </label>
            <input type="text" onChange={(e)=> setUsername(e.target.value)} /> <br/>
            <label>Password: </label>
            <input type="password" onChange={(e)=> setPassword(e.target.value)}/> <br/>
            <button onClick={handleAuthenication}>Login</button> <br/>
            <button>Switch to Signup</button>
        </div>
    );
};
export default LoginForm;