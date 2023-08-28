import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'

const Header = () => {
    return (
        <div className="pheader">
            <header>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/service">Service</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul> 
                </nav>
            </header>
        </div>
    );
};

export default Header;