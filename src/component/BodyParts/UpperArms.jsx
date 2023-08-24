import React, { useContext } from 'react'
import Navbar from '../Navbar'
import bg from './Assest/course-bg.jpg'
import { useNavigate } from 'react-router-dom'
import '../css/sameBg.css'
import { mycontext } from '../context/context'

const UpperArms = () => {
    const navigate=useNavigate()
    const {AllData} =useContext(mycontext)
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
              <p onClick={()=>navigate('/')} className='navigate-home'>HOME</p> <b >|</b><p style={{marginLeft:"20px",fontSize:"20px",color:"#ff4757"}}>ARM'S</p>
              </div>
              <h1 style={{color:"white",fontSize:"60px",margin:"0"}}>UPPER ARM'S EXCERCISES</h1>
          </div>
          < hr className='hr' />
               <h1>UPPER ARM'S</h1>
           {/* card-wala-section */}
           <div className='exer-card'>
              <div className="card-main">
                 {
                    AllData.map((e)=>{
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

export default UpperArms
