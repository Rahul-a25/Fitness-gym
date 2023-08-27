import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { singleData } from './Redux/action';
import './css/singleExercise.css'
import Navbar from './Navbar';
const SingleExercise = () => {
    const{id}=useParams()
    useEffect(()=>{
        singlegmfn()
    },[])
    const dispatch=useDispatch()
const singlegmfn= async()=>{
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
      headers: {
        'X-RapidAPI-Key': 'f41c2f25b7mshbb2475314b3780ep1e9f08jsn34f500ddbe3f',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
         dispatch(singleData(response.data))
    } catch (error) {
        console.error(error);
    }
}
const Data=useSelector((storeData)=>{
    return storeData.SingleData
})
const navigate=useNavigate()
  return (
    <>
      <Navbar/>
      <div className="gym-detail-container">
           <div className="img-wala">
             <img src={Data.gifUrl} alt="" />
           </div>
           <div className="content-wala-part">
                <div className="body-part">
                      <h1 className='font-style' style={{fontSize:"50px"}}> Body Part: <span className='color'>{Data.bodyPart}</span></h1>
                </div>
                <div className="lower-content">
                        <span className='font-style font-color'>Equipment: <span className='color'>{Data.equipment}</span></span>
                        <span className='font-style font-color'>Name: <span className='color'>{Data.name}</span></span>
                        <span className='font-style font-color'>Target: <span className='color'>{Data.target}</span></span>
                </div>
                <div className="button-wala">
                    <button className='btn btn-shadow font-style button' onClick={()=>{
                        navigate('/exercise')
                    }}>Go back</button>
                </div>
           </div>
      </div>
    </>
  )
}

export default SingleExercise
