import React from 'react'
import './css/upperbox.css'
import Bgimage from '../Assest/upper-image.jpg'
import Navbar from './Navbar'
const UpperBox = () => {
  return (
    <div className='upperbox-main' style={{}}>
        
        <div className='img' style={{   backgroundImage: `url(${Bgimage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '750px'}}></div>
        <Navbar/>
        <div className='mid-content'>
            <div className='mid-text font'>
            <span style={{color:"white"}}>GYM FITNESS CLUB</span>
            <h1>STEP UP YOUR <br />FITNESS CHALLENGE <br />With US</h1>
            </div>
             <div className="btn-wala-content">
                <button className='btn'>JOIN US</button>
             </div>
        </div>

    </div>
  )
}

export default UpperBox
