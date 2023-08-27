import React from 'react'
import './css/popular.css'
import img1 from '../Assest/poplar-image-1.jpg'
import { Link } from 'react-router-dom'
const Popular = () => {
  return (
    <div className='popular-container'>
        <h1 className='font-style'>POPULAR COURSES</h1>
        <span style={{fontSize:"25px",fontWeight:"300px"}} className='font-color font-style'>We offer more than 35 group exercis, aerobic classes each week.</span>
        {/* map-wala */}
       <div className="popular-card">
       <div className="card">
            <img src={img1} alt="" />
             <h1 className='font-style'>Build Body</h1>
             <span className='font-style font-size-popular'>MENTOR: <span className='color text-shadow-popular'>PANKAJ JAISWAL</span> </span>
        </div>
        <div className="card">
            <img src={img1} alt="" />
             <h1 className='font-style'>Build Body</h1>
             <span className='font-style font-size-popular'>MENTOR:<span className='color text-shadow-popular'>PANKAJ JAISWAL</span> </span>
        </div>
        <div className="card">
            <img src={img1} alt="" />
             <h1 className='font-style'>Build Body</h1>
             <span className='font-style font-size-popular'>MENTOR:<span className='color text-shadow-popular'>PANKAJ JAISWAL</span> </span>
        </div>
       </div>

        <Link to='/course'><button className='popular-btn btn-shadow button font-style'>SEE ALL OUR COURSES</button></Link>
    </div>
  )
}

export default Popular
