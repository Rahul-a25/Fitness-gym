import React, { useEffect, useState } from 'react'
import './css/allexercise.css'
import bg from '../Assest/course-bg.jpg'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux'
import Footer from './Footer'
import { BgColor, favourite, search, singleData } from './Redux/action'
import { AiTwotoneHeart} from "react-icons/ai";
import GetAllData from './ApisFolder/AllData'
// import { favourite } from './Redux/action'


const ALLExercise = () => {
  // const [bgcolor,setbgcolor]=useState('black')
    const dispatch=useDispatch()
    const navigate=useNavigate()
    // const {AllData,SetAllData,SetFilterData,FilterData} =useContext(mycontext)
    // const dispatch=useDispatch()
    // useEffect(()=>{
    //   // SetAllData,SetFilterData
    //     getAllData(dispatch)
    // },[])
    useEffect(()=>{
      // SetAllData,SetFilterData
        GetAllData(dispatch)
    },[])
    const Data=useSelector((storeData)=>{
      return storeData.AllData
    })
    
    const siglegym=(e)=>{
       dispatch(singleData(Data))
  
    }
    const favouritefn=(e)=>{
      dispatch(favourite(e))
    }
    const bgcolor=useSelector((storeData)=>{
      return storeData.AddColor
    })
    

  return (
    <>
    <div className='exer-container'>
         <div className='img' style={{   backgroundImage: `url(${bg})`, backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '400px'}}></div>
          <Navbar/>
          {/* navigate-wala-part */}
          <div className="navigate-wala">
              <div className="navigate">
              <p onClick={()=>navigate('/')} className='navigate-home font-style'>HOME</p> <b >|</b><p style={{marginLeft:"20px",fontSize:"20px"}} className='font-style color'>EXERCISES PART</p>
              </div>
              <h1 style={{color:"white",fontSize:"60px",margin:"0"}} className='font-style'>EXERCISES</h1>
          </div>
          
          {/* input-wala */}
          <div className="input-search">
              <input onChange={(e)=>dispatch(search(e.target.value))} className='input-section' type="text" placeholder='Search here body Part' />
          </div>
          {/* card-wala */}
          <div className='exer-card'>
              <div className="card-main">
                 {
                    Data.length>0?(
                      Data.map((e)=>{
                        return(
                          //  <Link to={`/singleExercise/${e.id}`} onClick={siglegym}>
                             <div key={e.id} className="card">
                            <img  src={e.gifUrl} alt="" />
                             <div className="content">
                             <p className='font-style '>Body Part:<span className='color'>{e.bodyPart.toUpperCase()}</span></p>
                             <p className='font-style font-color'>Part Name: <span className='color'>{e.target} </span></p>
                             <p className='font-style font-color'>Equipment Name : <span className='color'>{e.equipment}</span></p>
                             </div >
                             <div className="exer-card-lower" >
                             {/* <AiTwotoneHeart onClick={()=>favouritefn(e)}    className='ex-span' style={{color:`${bgcolor}`}}  /> */}
                             <button className='exer-btn button' onClick={()=>favouritefn(e)} >Add Favourite Exercise</button>
                              <Link className='last-btn-link' to={`/singleExercise/${e.id}`}  ><button className='exer-btn link-wala-btn button'onClick={siglegym}  >See Exercise</button></Link>
                             </div>
                       </div>

                          //  </Link>
                        )
                    })

                    // loader-wala-section
                    ):
                    <div class="loader">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
    <div class="bar4"></div>
    <div class="bar5"></div>
    <div class="bar6"></div>
    <div class="bar7"></div>
    <div class="bar8"></div>
    <div class="bar9"></div>
    <div class="bar10"></div>
    <div class="bar11"></div>
    <div class="bar12"></div>
</div>
                 }
              </div>
          </div> 
    </div>

    </>
  )
}

export default ALLExercise
