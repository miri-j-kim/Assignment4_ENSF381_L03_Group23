import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import SignupForm from './SignupForm.js';
import LoginForm from './LoginForm.js';

function Loginpage(){
    return(
        <div>
            <Header />
            <LoginForm />
            <Footer />
        </div>
    );
};

export default Loginpage;