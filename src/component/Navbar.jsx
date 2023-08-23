import React from 'react'
import { Link } from 'react-router-dom'
import './css/navbar.css'
const Navbar = () => {
  return (
    <div className='container'>
        <div className="same font left"><p>Logo</p></div>
        <div className="same ">
            <Link to='/' className='font'>Home</Link>
            <Link className='font'>About</Link>
            <Link to='/trainer' className='font'>Trainer</Link>
            <Link to='/exercise' className='font'>Exercises</Link>
            <Link className='font'>Contact</Link>
        </div>
        <div className="same right">
            <p className=' font'>Name</p>
        </div>
    </div>
  )
}

export default Navbar
