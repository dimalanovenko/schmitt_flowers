import React from 'react';
import {Link} from "react-router";

const Nav = () => {
    return (
        <nav>
            <Link to='/contact'>contact</Link>
            <Link to='/about'>about</Link>
            <Link to='/products'>products</Link>
        </nav>
    )
}

export default Nav
