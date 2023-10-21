import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../componets/public/Header';
import Footer from '../componets/public/Footer';




const Layout = () => {
    return (
        <div className='Layout'>
            <Header/>
            <Outlet/>
            <Footer/>

        </div>
    );
};

export default Layout;