import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Links from './Links';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop'
import './MainNav.css';

const MainNav = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler  = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };

    return (
        <React.Fragment>
        {drawerIsOpen ? <Backdrop onClick={closeDrawerHandler} /> : null}
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
            <nav className='main-navigation__drawer-nav'>
                <Links />
            </nav>
        </SideDrawer>
        <Header>
            <button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
                <span />
                <span />
                <span />
            </button>
            <h1 className='main-navigation__title'>
                <Link to='/'>YourGames</Link>
            </h1>
            <nav className='main-navigation__header-nav'>
                <Links />
            </nav>
        </Header>
        </React.Fragment>
    );
};

export default MainNav;