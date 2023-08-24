import React from 'react'
import { Link } from 'react-router-dom'
import './css/navbar.css'
const Navbar = () => {
  return (
    <div className='container'>
        <div className="same font left font-style" ><p style={{fontSize:"30px",margin:"0",fontWeight:"900",color:"white"}}>Pj<span className='color'>Fit</span>ness</p></div>
        <div className="same ">
            <Link to='/' className='font font-style'>Home</Link>
            <Link className='font font-style'>About</Link>
            <Link to='/trainer' className='font font-style'>Trainer</Link>
            <Link to='/exercise' className='font font-style'>Exercises</Link>
            <Link to='/contact' className='font font-style'>Contact</Link>
        </div>
        <div className="same right">
        <p style={{fontSize:"30px",margin:"0",fontWeight:"900"}} className='color'>+23-563-5688</p>
        </div>
    </div>
  )
}

export default Navbar
