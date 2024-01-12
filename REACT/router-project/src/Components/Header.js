import React from 'react'
import { Link } from 'react-router-dom';




export const Header = () => {
  return (
    <div>
        <nav>
            <Link to="/" className='navLink'>Home</Link>
            <Link to="/about" className='navLink'>About</Link>
            <Link to="/contact" className='navLink'>Contact</Link>
            <Link to="login/" className='navLink'>Login</Link>

        </nav>


    </div>
  )
}
export default Header;