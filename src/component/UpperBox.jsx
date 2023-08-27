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
            <span style={{color:"white "}} className='font-style spanwala'>GYM FITNESS CLUB</span>
            <h1  style={{color:"white"}}> <span className='font-style'>STEP UP YOUR</span> <br /><span className='color font-style'>FITNESS CHALLENGE</span> <br /><span className='font-style'>With US</span></h1>
            </div>
             <div style={{marginRight:"570px"}} className="btn-wala-content">
                <button className='btn btn-main font-style button'>JOIN US</button>
             </div>
        </div>

    </div>
  )
}

export default UpperBox
