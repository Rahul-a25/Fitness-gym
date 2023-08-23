import React, { useContext } from 'react'
import bg from '../Assest/course-bg.jpg'
import './css/course.css'
import Navbar from './Navbar'
import img1 from '../Assest/course-img1.jpg'
import img2 from '../Assest/course-img2.jpg'
import { BiTime } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { mycontext } from './context/context'
const Course = () => {
     const navigate = useNavigate()
     const { SetAllData, FilterData } = useContext(mycontext)
     const back = () => {
          SetAllData(FilterData.filter((e)=>e.bodyPart==='back'))

          navigate('/back')
     }
     const cardio=()=>{
          SetAllData(FilterData.filter((e)=>e.bodyPart==='cardio'))
          navigate('/cardio')
     }
     const chest=()=>{
          SetAllData(FilterData.filter((e)=>e.bodyPart==='chest'))
          navigate('/chest')
     }
     const lowerarms=()=>{
          SetAllData(FilterData.filter((e)=>e.bodyPart==='lower arms'))
          navigate('/lowerarms')
     }
     const shoulders=()=>{
          SetAllData(FilterData.filter((e)=>e.bodyPart==='shoulders'))
          navigate('/shoulders')
     }
     const upperarms=()=>{
          SetAllData(FilterData.filter((e)=>e.bodyPart==='upper arms'))
          navigate('/upperarms')
     }
     const upperlegs=()=>{
          SetAllData(FilterData.filter((e)=>e.bodyPart==='upper legs'))
          navigate('/upperlegs')
     }
     const lowerlegs=()=>{
          SetAllData(FilterData.filter((e)=>e.bodyPart==='lower legs'))
          navigate('/lowerlegs')
     }
     return (
          <div className='course-container'>
               <div className='img' style={{
                    backgroundImage: `url(${bg})`, backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '400px'
               }}></div>
               <Navbar />
               {/* navigate-wala-part */}
               <div className="navigate-wala">
                    <div className="navigate">
                         <p onClick={() => navigate('/')} className='navigate-home'>Home</p> <b >|</b><p style={{ marginLeft: "20px", fontSize: "20px", color: "#ff4757" }}>Courses</p>
                    </div>
                    <h1 style={{ color: "white", fontSize: "60px", margin: "0" }}>BEST COURSES</h1>
               </div>

               < hr className='hr' />
               <h1>POPULAR COURSES</h1>
               <div className="body-parts">

                    <div className="same-body back">
                         <img src={img1} alt="" />
                         <div className="content">
                              <span ><b>Exercise Name </b>:Back</span>
                              <p >Trainer :Pankaj Jaiswal</p>
                              <p> <span style={{ margin: "10px 5px 0px 0px " }}>< BiTime style={{ color: "red" }} /></span>Monday-Tuesday : 7am-12pm</p>
                              <button onClick={back} className='btn-course'>See Back Exercises</button>
                         </div>
                    </div>
                    <div className="same-body cardio">
                         <img src={img2} alt="" />
                         <div className="content">
                              <span ><b>Exercise Name </b>:Cardio</span>
                              <p >Trainer :Pankaj Jaiswal</p>
                              <p> <span style={{ margin: "10px 5px 0px 0px " }}>< BiTime style={{ color: "red" }} /></span>Monday-Tuesday : 7am-12pm</p>
                              <button onClick={cardio} className='btn-course'>See Cardio Exercises</button>
                         </div>
                    </div>
                    <div className="same-body chest">
                         <img src={img2} alt="" />
                         <div className="content">
                              <span ><b>Exercise Name </b>:Chest</span>
                              <p >Trainer :Pankaj Jaiswal</p>
                              <p> <span style={{ margin: "10px 5px 0px 0px " }}>< BiTime style={{ color: "red" }} /></span>Monday-Tuesday : 7am-12pm</p>
                              <button onClick={chest} className='btn-course'>See Chest Exercises</button>
                         </div>
                    </div>
                    <div className="same-body lowerarms">
                         <img src={img2} alt="" />
                         <div className="content">
                              <span ><b>Exercise Name </b>:Lower arms</span>
                              <p >Trainer :Pankaj Jaiswal</p>
                              <p> <span style={{ margin: "10px 5px 0px 0px " }}>< BiTime style={{ color: "red" }} /></span>Monday-Tuesday : 7am-12pm</p>
                              <button onClick={lowerarms} className='btn-course'>See Lower-Arms Exercises</button>
                         </div>
                    </div>
                    <div className="same-body lowerlegs">
                         <img src={img2} alt="" />
                         <div className="content">
                              <span ><b>Exercise Name </b>:Lower legs</span>
                              <p >Trainer :Pankaj Jaiswal</p>
                              <p> <span style={{ margin: "10px 5px 0px 0px " }}>< BiTime style={{ color: "red" }} /></span>Monday-Tuesday : 7am-12pm</p>
                              <button onClick={lowerlegs} className='btn-course'>See Legs Exercises</button>
                         </div>
                    </div>
                    <div className="same-body neck">
                         <img src={img2} alt="" />
                         <div className="content">
                              <span ><b>Exercise Name </b>:Neck</span>
                              <p >Trainer :Pankaj Jaiswal</p>
                              <p> <span style={{ margin: "10px 5px 0px 0px " }}>< BiTime style={{ color: "red" }} /></span>Monday-Tuesday : 7am-12pm</p>
                              <button className='btn-course'>See Neck Exercises</button>
                         </div>
                    </div>
                    <div className="same-body shoulders">
                         {/* shoulders */}
                         <img src={img2} alt="" />
                         <div className="content">
                              <span ><b>Exercise Name </b>:Shoulders</span>
                              <p >Trainer :Pankaj Jaiswal</p>
                              <p> <span style={{ margin: "10px 5px 0px 0px " }}>< BiTime style={{ color: "red" }} /></span>Monday-Tuesday : 7am-12pm</p>
                              <button onClick={shoulders} className='btn-course'>See Shoulders Exercises</button>
                         </div>
                    </div>
                    <div className="same-body upperarms">
                         <img src={img2} alt="" />
                         <div className="content">
                              <span ><b>Exercise Name </b>:Upper arms</span>
                              <p >Trainer :Pankaj Jaiswal</p>
                              <p> <span style={{ margin: "10px 5px 0px 0px " }}>< BiTime style={{ color: "red" }} /></span>Monday-Tuesday : 7am-12pm</p>
                              <button onClick={upperarms} className='btn-course'>See Upper-Arms Exercises</button>
                         </div>
                    </div>
                    <div className="same-body upper legs">
                         <img src={img2} alt="" />
                         <div className="content">
                              <span ><b>Exercise Name </b>:Upper legs</span>
                              <p >Trainer :Pankaj Jaiswal</p>
                              <p> <span style={{ margin: "10px 5px 0px 0px " }}>< BiTime style={{ color: "red" }} /></span>Monday-Tuesday : 7am-12pm</p>
                              <button onClick={upperlegs} className='btn-course'>See Upper-Legs Exercises</button>
                         </div>
                    </div>
               </div>
               <Footer />
          </div>

     )
}

export default Course
