import React from 'react';

import './Header.css'

const Header = props => {
    return <header className='__header'>{props.children}</header>
};

export default Header;