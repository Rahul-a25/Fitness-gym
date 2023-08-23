import React, { useContext, useEffect } from 'react'
import './css/allexercise.css'
import bg from '../Assest/course-bg.jpg'
import getAllData from './ApisFolder/AllData'
import { mycontext } from './context/context'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const ALLExercise = () => {
    const navigate=useNavigate()
    const {AllData,SetAllData,SetFilterData,FilterData} =useContext(mycontext)
    useEffect(()=>{
        getAllData(SetAllData,SetFilterData)
    },[])
  return (
    <div className='exer-container'>
         <div className='img' style={{   backgroundImage: `url(${bg})`, backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '400px'}}></div>
          <Navbar/>
          {/* navigate-wala-part */}
          <div className="navigate-wala">
              <div className="navigate">
              <p onClick={()=>navigate('/')} className='navigate-home'>HOME</p> <b >|</b><p style={{marginLeft:"20px",fontSize:"20px",color:"#ff7f50"}}>EXERCISES PART</p>
              </div>
              <h1 style={{color:"white",fontSize:"60px",margin:"0"}}>EXERCISES</h1>
          </div>
          <button onClick={()=>{SetAllData(FilterData.filter((e)=>e.bodyPart==='cardio'))}}>Cardio</button>
          {/* card-wala */}
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

export default ALLExercise
