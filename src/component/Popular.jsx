import React from 'react'
import './css/popular.css'
import img1 from '../Assest/poplar-image-1.jpg'
import { Link } from 'react-router-dom'
const Popular = () => {
  return (
    <div className='popular-container'>
        <h1>POPULAR COURSES</h1>
        <span>We offer more than 35 group exercis, aerobic classes each week.</span>
        {/* map-wala */}
        <div className="card">
            <img src={img1} alt="" />
             <h1>Build Body</h1>
             <span>MENTOR:Rahul Arora</span>
        </div>

        <Link to='/course'><button className='popular-btn font-style'>SEE ALL OUR COURSES</button></Link>
    </div>
  )
}

export default Popular
