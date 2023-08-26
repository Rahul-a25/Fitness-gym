import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './css/navbar.css'
import { Body,Cardio, Chest, LowerArms, Lowerlegs, Shoulders, UpperArms, Upperlegs, Waist } from './Redux/action'
import { useDispatch, useSelector } from 'react-redux'
const Navbar = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate()
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
    <>
    <div className='container'>
        <div className="same font left font-style" ><p style={{fontSize:"30px",margin:"0",fontWeight:"900",color:"white"}}>Pj<span className='color'>Fit</span>ness</p></div>
        <div className="same ">
            <Link  to='/' className='font font-style nav-wala'>Home</Link>
            <Link to='/about' className='font font-style nav-wala'>About</Link>
            <Link to='/trainer' className='font font-style nav-wala'>Trainer</Link>
            <Link style={{padding:"10px"}} to='/exercise' className='font  font-style nav-wala' id='exp-do'>Exercises
            <div id='experince-section'>
    <ul  className='exp-child'>
          <div className="section">
          <Link className='li-wala' onClick={back} to='/back'>Back</Link>
           <Link className='li-wala' onClick={cardio} to='/cardio'>Cardio</Link>
           <Link className='li-wala' onClick={chest} to='/chest'>Chest</Link>
           <Link className='li-wala' onClick={shoulders} to='/shoulders'>Shoulders</Link>
           <Link className='li-wala' onClick={waist} to='/waist'>Waist</Link>
           <Link className='li-wala' onClick={upperlegs} to='/upperlegs'>UpperLegs</Link>
           <Link className='li-wala' onClick={lowerlegs} to='/lowerlegs'>LowerLegs</Link>
           <Link className='li-wala' onClick={upperarms} to='/upperarms'>UpperArms</Link>
           <Link className='li-wala' onClick={lowerarms} to='/lowerarms'>LowerArms</Link>
          </div>
         </ul>
    </div>
            </Link>
            <Link to='/contact' className='font font-style'>Contact</Link>
            
        </div>
        <div className="same right">
        <p style={{fontSize:"30px",margin:"0",fontWeight:"900"}} className='color'>+23-563-5688</p>
        </div>
        
    </div>
    
    </>
  )
}

export default Navbar
