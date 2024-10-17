import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>LMS</h1>
        <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/progress">Progress</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar;