import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import bg from '../Assest/course-bg.jpg'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import './css/favExer.css'
import { DeleteAction } from './Redux/action'
const FavouriteExer = () => {
    const Data=useSelector((storeData)=>{
        return storeData.AddToFavourite
    })
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const Deletefn=(e)=>{
        dispatch(DeleteAction(e))
    }
  return (
    <>  
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
                         <p onClick={() => navigate('/')} className='navigate-home font-style'>Home</p> <b >|</b><p style={{ marginLeft: "20px", fontSize: "20px", color: "#ff4757" }} className='font-style'>FAVOURITE PART</p>
                    </div>
                    <h1 className='font-style' style={{ color: "white", fontSize: "60px", margin: "0" }}>FAVOURITE EXERCISE</h1>
               </div>

               < hr className='hr' />
               <h1 className='font-style'>MY EXERCISE</h1>
         {/* favourite-container */}
        
        {
            Data.length>0?(
              Data.map((Data)=>{
                return(
                    <div className="fav-exer-main">
                    <div className="fav-img">
                       <img src={Data.gifUrl} alt="" />
                    </div>
                    <div className="second-content-part">
                    <div className="content-fav-section">
                    <h1 className='font-style'>Body-Name:<span className='color font-style'>{Data.bodyPart.toUpperCase()}</span></h1>
                         <p className='font-style font-color fav-font-size'>Part Name: <span className='color'>{Data.target}</span></p>
                         <p className='font-style font-color fav-font-size'>Equipment Name: <span className='color'>{Data.equipment}</span></p>
                         {/* <button >Delete</button> */}
                         {/* <button id='fav-btn' style={{marginTop:"5px"}} className='font-style'   onClick={()=>{Deletefn(Data)}}  className="noselect"><span className="text">Delete</span>
                         <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button> */}
                          <button id='mybtn' className='font-style' onClick={()=>{Deletefn(Data)}}  class="noselect"><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                    </div>
                         
                    </div>
                 </div>
                )
              })  
                ): <h1 className='font-style' style={{textShadow: '6px 4px 4px rgba(0,0,0,0.6)'}}>Please Add Your Favourite Exercise</h1>
        }
    </>
  )
}

export default FavouriteExer
