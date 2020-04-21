import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1 >User Pages</h1>
            <nav>
                <a href="/user">User</a>
                <a href="/profile">Profile </a>
                <a href="/friends">Friends</a>
                <a href="findNew">Find People</a>
                
            </nav>
        </div>
    );
};

export default Header;