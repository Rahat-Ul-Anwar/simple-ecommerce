import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';


const Header = () => {
    return (
        
            <nav className="menu">
                <img src={logo} alt="" srcset="" />
                <div className='nav-menu'>
                        <a href="/order">Order</a>
                        <a href="/review">Order Review</a>
                        <a href="/inventory">Manage Inventory</a>
                        <a href="/login">Login</a>
                        <a href="/blog">Blog</a>
                </div>
           </nav>
    
    );
};

export default Header;