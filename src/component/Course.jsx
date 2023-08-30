import React, { useContext } from 'react'
import bg from '../Assest/course-bg.jpg'
import './css/course.css'
import Navbar from './Navbar'
import img1 from '../Assest/course-img1.jpg'
import img2 from '../Assest/course-img2.jpg'
import photo1 from '../Assest/photo1.webp'
import photo2 from '../Assest/photo2.jpg'
import photo3 from '../Assest/photo3.webp'
import { BiTime } from "react-icons/bi";
import waistphoto from '../Assest/waist.jpg'
import shouldersphoto from '../Assest/shoulders.webp'
import upperlegsphoto from '../Assest/upperlegs.webp'
import upperarmsphoto from '../Assest/upperarms.jpg'
import chestphoto from '../Assest/chest.jpg'
import backphoto from '../Assest/back.jpg'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { Body,Cardio, Chest, LowerArms, Lowerlegs, Shoulders, UpperArms, Upperlegs, Waist } from './Redux/action'
// import UpperLegs from './BodyParts/UpperLegs'
// import LowerLegs from './BodyParts/LowerLegs'
const Course = () => {
     const dispatch=useDispatch()
     const navigate = useNavigate()
     // const { SetAllData, FilterData } = useContext(mycontext)
     const Data=useSelector((storeData)=>{
          return storeData.FilterData
     })
     const back = () => {
          // SetAllData(FilterData.filter((e)=>e.bodyPart==='back'))
          dispatch(Body(Data))
          navigate('/back')
     }
     const cardio=()=>{
          dispatch(Cardio(Data))
          navigate('/cardio')
     }
     const chest=()=>{
          dispatch(Chest(Data))
          navigate('/chest')
     }
     const lowerarms=()=>{
          dispatch(LowerArms(Data))
          navigate('/lowerarms')
     }
     const shoulders=()=>{
          dispatch(Shoulders(Data))
          navigate('/shoulders')
     }
     const upperarms=()=>{
         dispatch(UpperArms(Data))
          navigate('/upperarms')
     }
     const upperlegs=()=>{
          dispatch(Upperlegs(Data))
          navigate('/upperlegs')
     }
     const lowerlegs=()=>{
          dispatch(Lowerlegs(Data))
          navigate('/lowerlegs')
     }
     const waist=()=>{
        dispatch(Waist(Data))
          navigate('/waist')
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
                         <p onClick={() => navigate('/')} className='navigate-home font-style'>Home</p> <b >|</b><p style={{ marginLeft: "20px", fontSize: "20px", color: "#ff4757" }} className='font-style'>Courses</p>
                    </div>
                    <h1 style={{ color: "white", fontSize: "60px", margin: "0" }} className='font-style'>BEST COURSES</h1>
               </div>

               < hr className='hr' />
               <h1 className='font-style'>POPULAR COURSES</h1>
               <div className="body-parts">

                    <div className="same-body back">
                         <img src={backphoto} alt="" />
                         <div className="content">
                              <span className='font-style'><b>Exercise Name </b>:Back</span>
                              <p className='font-style' >Trainer : <span className='color'>Pankaj Jaiswal</span> </p>
                              <p className='font-style'> <span style={{ margin: "10px 5px 0px 0px " }}>< BiTime style={{ color: "red" }} /></span>Monday-Tuesday : 7am-12pm</p>
                              <button onClick={back} className='btn-course button btn-shadow font-style'>See Back Exercises</button>
                         </div>
                    </div>
                    <div className="same-body cardio">
                         <img src={photo1} alt="" />
                         <div className="content">
                              <span className='font-style' ><b>Exercise Name </b>:Cardio</span>
                              <p className='font-style' >Trainer :<span className='color'>Pankaj Jaiswal</span> </p>
                              <p className='font-style'> <span style={{ margin: "10px 5px 0px 0px " }}>< BiTime style={{ color: "red" }} /></span>Monday-Tuesday : 7am-12pm</p>
                              <button onClick={cardio} className='btn-course button  btn-shadow font-style'>See Cardio Exercises</button>
                         </div>
                    </div>
                    <div className="same-body chest">
                         <img src={chestphoto} alt="" />
                         <div className="content">
                              <span className='font-style' ><b>Exercise Name </b>:Chest</span>
                              <p className='font-style' >Trainer :<span className='color'>Pankaj Jaiswal</span> </p>
                              <p className='font-style'> <span style={{ margin: "10px 5px 0px 0px " }}>< BiTime style={{ color: "red" }} /></span>Monday-Tuesday : 7am-12pm</p>
                              <button onClick={chest} className='btn-course button  btn-shadow font-style'>See Chest Exercises</button>
                         </div>
                    </div>
                    <div className="same-body lowerarms">
                         <img src={photo2} alt="" />
                         <div className="content">
                              <span className='font-style' ><b>Exercise Name </b>:Lower arms</span>
                              <p className='font-style' >Trainer :<span className='color'>Pankaj Jaiswal</span> </p>
                              <p className='font-style'> <span style={{ margin: "10px 5px 0px 0px " }}>< BiTime style={{ color: "red" }} /></span>Monday-Tuesday : 7am-12pm</p>
                              <button onClick={lowerarms} className='btn-course button  btn-shadow font-style'>See Lower-Arms Exercises</button>
                         </div>
                    </div>
                    <div className="same-body lowerlegs">
                         <img src={photo3} alt="" />
                         <div className="content">
                              <span  className='font-style'><b>Exercise Name </b>:Lower legs</span>
                              <p className='font-style' >Trainer :<span className='color'>Pankaj Jaiswal</span> </p>
                              <p className='font-style'> <span style={{ margin: "10px 5px 0px 0px " }}>< BiTime style={{ color: "red" }} /></span>Monday-Tuesday : 7am-12pm</p>
                              <button onClick={lowerlegs} className='btn-course button  btn-shadow font-style'>See Legs Exercises</button>
                         </div>
                    </div>
                    <div className="same-body neck">
                         <img src={waistphoto} alt="" />
                         <div className="content">
                              <span className='font-style' ><b>Exercise Name </b>:Waist</span>
                              <p className='font-style' >Trainer :<span className='color'>Pankaj Jaiswal</span> </p>
                              <p className='font-style'> <span style={{ margin: "10px 5px 0px 0px " }}>< BiTime style={{ color: "red" }} /></span>Monday-Tuesday : 7am-12pm</p>
                              <button onClick={waist} className='btn-course button  btn-shadow font-style'>See Waist Exercises</button>
                         </div>
                    </div>
                    <div className="same-body shoulders">
                         {/* shoulders */}
                         <img src={shouldersphoto} alt="" />
                         <div className="content">
                              <span  className='font-style'><b>Exercise Name </b>:Shoulders</span>
                              <p className='font-style' >Trainer :<span className='color'>Pankaj Jaiswal</span> </p>
                              <p className='font-style'> <span style={{ margin: "10px 5px 0px 0px " }}>< BiTime style={{ color: "red" }} /></span>Monday-Tuesday : 7am-12pm</p>
                              <button onClick={shoulders} className='btn-course button  btn-shadow font-style'>See Shoulders Exercises</button>
                         </div>
                    </div>
                    <div className="same-body upperarms">
                         <img src={upperarmsphoto} alt="" />
                         <div className="content">
                              <span className='font-style' ><b>Exercise Name </b>:Upper arms</span>
                              <p className='font-style' >Trainer <span className='color'>Pankaj Jaiswal</span> </p>
                              <p className='font-style'> <span style={{ margin: "10px 5px 0px 0px " }}>< BiTime style={{ color: "red" }} /></span>Monday-Tuesday : 7am-12pm</p>
                              <button onClick={upperarms} className='btn-course button  btn-shadow font-style'>See Upper-Arms Exercises</button>
                         </div>
                    </div>
                    <div className="same-body upper legs">
                         <img src={upperlegsphoto} alt="" />
                         <div className="content">
                              <span className='font-style'><b>Exercise Name </b>:Upper legs</span>
                              <p className='font-style'>Trainer :<span className='color'>Pankaj Jaiswal</span> </p>
                              <p className='font-style'> <span style={{ margin: "10px 5px 0px 0px " }}>< BiTime style={{ color: "red" }} /></span>Monday-Tuesday : 7am-12pm</p>
                              <button onClick={upperlegs} className='btn-course button  btn-shadow font-style'>See Upper-Legs Exercises</button>
                         </div>
                    </div>
               </div>
               <Footer />
          </div>

     )
}

export default Course
