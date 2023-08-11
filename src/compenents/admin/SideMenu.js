import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div className='SideMenu'>
            <ul>
                <li><Link to="/"></Link>Accueil</li>
                <li>&nbsp;</li>
                <li><Link to="admin/dashboard"></Link>Dashboard</li>
            </ul>
        </div>
    );
};

export default SideMenu;