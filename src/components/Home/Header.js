import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className='header'>

            <div>

                <Link className='logo' as={Link} to="/home">
                    Logo
                </Link>
            </div>
            <div className='navbar'>
                <Link className='link' as={Link} to="/home">
                    Home
                </Link>
                <Link className='link' as={Link} to="/about">
                    About
                </Link>
                <Link className='link' as={Link} to="/services">
                    Services
                </Link>
                <Link className='link' as={Link} to="/blog">
                    Blog
                </Link>
                <Link className='link' as={Link} to="/contact">
                    Contact
                </Link>

                <button className='qt'>Get a free Quote</button>



            </div>




        </div>
    );
};

export default Navbar;
