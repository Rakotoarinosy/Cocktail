import React from 'react';
import { Outlet } from 'react-router-dom';

import './admin.css'

import Header from '@/compenents/admin/Header';
import SideMenu from '@/compenents/admin/SideMenu';


const ALayout = () => {
    return (
        <div className='ALayout'>
            <Header/>
            <div id='admin'>
                <SideMenu/>
                <div id='admin_body'><Outlet/></div>
            </div>
        </div>
    );
};

export default ALayout;