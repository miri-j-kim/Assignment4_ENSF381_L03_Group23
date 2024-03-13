import React from 'react';

function Header(){
    const headerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      };

    return(
        <div>
            <div className="header" style={headerStyle}>
            <img style={{height: '60px'}} src='/images/logo.png' className="logo" alt="company logo" />
            <h1 style={{fontWeight:'normal', fontSize: '20px'}}>Company Name</h1>
            </div><div className="navbar" style={headerStyle}>
                <a href='/'>Home</a>
                <a href='/Products'>Products</a>
                <a href='/Login'>Login</a>
            </div>
        </div>
    );
};

export default Header;