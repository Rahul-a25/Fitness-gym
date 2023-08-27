import React, { useContext } from 'react'
import Navbar from '../Navbar'
import bg from './Assest/course-bg.jpg'
import { useNavigate } from 'react-router-dom'
import '../css/sameBg.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { favourite } from '../Redux/action'
import { singleData } from '../Redux/action'
import { Link } from 'react-router-dom'
const LowerArms = () => {
    const navigate=useNavigate()
    // const {AllData} =useContext(mycontext)
    const Data=useSelector((storeData)=>{
      return storeData.AllData
    })
    const dispatch=useDispatch()
    const siglegym=(e)=>{
      dispatch(singleData(Data))
   }
   const favouritefn=(e)=>{
     dispatch(favourite(e))
   }
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
              <p onClick={()=>navigate('/')} className='navigate-home font-style'>HOME</p> <b >|</b><p className='font-style' style={{marginLeft:"20px",fontSize:"20px",color:"#ff4757"}}>LOWER ARM'S</p>
              </div>
              <h1 className='font-style' style={{color:"white",fontSize:"60px",margin:"0"}}>LOWER ARM'S EXCERCISE</h1>
          </div>
          < hr className='hr' />
               <h1 className='font-style'>LOWER ARM'S</h1>
           {/* card-wala-section */}
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
  )
}

export default LowerArms
