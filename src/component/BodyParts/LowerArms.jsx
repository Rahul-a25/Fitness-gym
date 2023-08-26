import React, { useContext } from 'react'
import Navbar from '../Navbar'
import bg from './Assest/course-bg.jpg'
import { useNavigate } from 'react-router-dom'
import '../css/sameBg.css'
import { mycontext } from '../context/context'
import { useSelector } from 'react-redux'

const LowerArms = () => {
    const navigate=useNavigate()
    // const {AllData} =useContext(mycontext)
    const Data=useSelector((storeData)=>{
      return storeData.AllData
    })
  return (
    <div>
            <div className='img' style={{   backgroundImage: `url(${bg})`, backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '400px'}}></div>
          <Navbar/>
          {/* navigate-wala-part */}
          <div className="navigate-wala">
              <div className="navigate">
              <p onClick={()=>navigate('/')} className='navigate-home'>HOME</p> <b >|</b><p style={{marginLeft:"20px",fontSize:"20px",color:"#ff4757"}}>LOWER ARM'S</p>
              </div>
              <h1 style={{color:"white",fontSize:"60px",margin:"0"}}>LOWER ARM'S EXCERCISE</h1>
          </div>
          < hr className='hr' />
               <h1>LOWER ARM'S</h1>
           {/* card-wala-section */}
           <div className='exer-card'>
              <div className="card-main">
                 {
                    Data.map((e)=>{
                        return(
                            <div key={e.id} className="card">
                            <img  src={e.gifUrl} alt="" />
                             <div className="content">
                             <p>Body Part:{e.bodyPart}</p>
                             <p>Part Name:{e.target} </p>
                             <p>Eqiupment Name :{e.equipment}</p>
                             </div>
                            
                       </div>
                        )
                    })
                 }
              </div>
          </div> 
    </div>
  )
}

export default LowerArms
