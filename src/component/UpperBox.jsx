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
            <span style={{color:"white "}} className='font-style spanwala '>GYM FITNESS CLUB</span>
            <h1 className='font-style' style={{color:"white"}}>STEP UP YOUR <br /><span className='color'>FITNESS CHALLENGE</span> <br />With US</h1>
            </div>
             <div className="btn-wala-content">
                <button className='btn font-style'>JOIN US</button>
             </div>
        </div>

    </div>
  )
}

export default UpperBox
