import React from 'react';
import { NavLink } from 'react-router-dom';
import { GrNotification } from 'react-icons/gr';
import './Navbar.css';
import avatar from '../../assets/Image/avatar.jpg'

const Navbar = () => {
    return (
        <>
        <div className='navbar'>
            <div className='nav'>
                <NavLink to="/">
                    <h1>TunicaLabs Media</h1>
                </NavLink>
            </div>
            <div className='nav-links'>
                <NavLink to='/'>
                    <GrNotification/>
                </NavLink>
                <div className='profile'>
                    <NavLink to='/SignIn'>
                        <img src={avatar} alt='rahul'/>
                    </NavLink>
                </div>
            </div>
        </div> 
        </>
    )
}

export default Navbar
