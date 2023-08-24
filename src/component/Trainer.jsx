import React from 'react'
import bg from '../Assest/course-bg.jpg'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import './css/trainer.css'
import pankaj from '../Assest/Pankaj-photo.jpg'
import { FaFacebookF} from "react-icons/fa";
import { TfiTwitter} from "react-icons/tfi";
import { BiLogoLinkedin } from "react-icons/bi";
import trainer2 from '../Assest/trainer-2.jpg'
import trainer3 from '../Assest/Trainer-3.jpg'
import trainer4 from '../Assest/Tariner-4.jpg'
import Footer from './Footer'
const Trainer = () => {
    const navigate=useNavigate()
  return (
    <div className='trainer-main'>
      {/* navbar-dark-bg-wala-part */}
          <div className='img' style={{   backgroundImage: `url(${bg})`, backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '400px'}}></div>
          <Navbar/>
          {/* navigate-wala-part */}
          <div className="navigate-wala">
              <div className="navigate">
              <p onClick={()=>navigate('/')} className='navigate-home font-style'>HOME</p> <b >|</b><p style={{marginLeft:"20px",fontSize:"20px",color:"#ff4757"}} className='font-style'>TEAM</p>
              </div>
              <h1 style={{color:"white",fontSize:"60px",margin:"0"}} className='font-style'>TRAINER</h1>
          </div>

          {/* trainer-wala-part */}
          <div className="trainer-setion">
               < hr className='hr' />
               <h1 className='font-style'>TRAINER TEAM</h1>
               <div className="team">
                {/* Trainer 1 Profile */}
                     <div className="pankaj">
                         <img src={pankaj} alt="" />
                         <div className="content">
                             <h3 className='color font-style'>Pankaj Jaiswal</h3>
                              <h6 className='font-style'>CROSS EXPERT TRAINER</h6>
                              <p className='font-style'>Growing up, I’ve always been involved in sports, fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury.</p>
                              <div className="icon">
                                   <div className="fb same">
                                      <FaFacebookF/>
                                   </div>
                                   <div className="twitter same">
                                      <TfiTwitter/>
                                   </div>
                                   <div className="linked same">
                                      <BiLogoLinkedin/>
                                   </div>
                              </div>
                         </div>
                     </div>

                     {/* Trainer 2 Profile */}
                     <div className="pankaj">

                     <img src={trainer2} alt="" />
                         <div className="content">
                             <h3 className='color font-style'>SHOBHIT SHUKLA</h3>
                              <h6 className='font-style'>CROSS EXPERT TRAINER</h6>
                              <p className='font-style'>Growing up, I’ve always been involved in sports, fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury.</p>
                              <div className="icon">
                                   <div className="fb same">
                                      <FaFacebookF/>
                                   </div>
                                   <div className="twitter same">
                                      <TfiTwitter/>
                                   </div>
                                   <div className="linked same">
                                      <BiLogoLinkedin/>
                                   </div>
                              </div>
                         </div>
                     </div>

                     {/* Trainer-3 Profile */}
                     <div className="pankaj">

                     <img src={trainer3} alt="" />
                         <div className="content">
                             <h3 className='color font-style'>Sumit Kori</h3>
                              <h6 className='font-style'>CROSS EXPERT TRAINER</h6>
                              <p className='font-style'>Growing up, I’ve always been involved in sports, fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury.</p>
                              <div className="icon">
                                   <div className="fb same">
                                      <FaFacebookF/>
                                   </div>
                                   <div className="twitter same">
                                      <TfiTwitter/>
                                   </div>
                                   <div className="linked same">
                                      <BiLogoLinkedin/>
                                   </div>
                              </div>
                         </div>
                     </div>

                     {/* Trainer-4 Profile */}
                     <div className="pankaj">

                     <img src={trainer4} alt="" />
                         <div className="content">
                             <h3 className='color font-style'>AMISHA PATIL</h3>
                              <h6 className='font-style'>CROSS EXPERT TRAINER</h6>
                              <p className='font-style'>Growing up, I’ve always been involved in sports, fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury.</p>
                              <div className="icon">
                                   <div className="fb same">
                                      <FaFacebookF/>
                                   </div>
                                   <div className="twitter same">
                                      <TfiTwitter/>
                                   </div>
                                   <div className="linked same">
                                      <BiLogoLinkedin/>
                                   </div>
                              </div>
                         </div>
                     </div>
               </div>
          </div>
          <div className="footer">
               <Footer/>
          </div>
    </div>
  )
}

export default Trainer
