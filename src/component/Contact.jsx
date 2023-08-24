import React from 'react'
import './css/contact.css'
import bg from '../Assest/course-bg.jpg'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { MdPhoneAndroid} from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Footer from './Footer'
const Contact = () => {
    const navigate=useNavigate()
  return (
    <div className='contact-container'>
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
                         <p onClick={() => navigate('/')} className='navigate-home font-style'>Home</p> <b >|</b><p style={{ marginLeft: "20px", fontSize: "20px", color: "#ff4757" }} className='font-style'>CONTACT</p>
                    </div>
                    <h1 className='font-style' style={{ color: "white", fontSize: "60px", margin: "0" }}>CONTACT US</h1>
               </div>

               < hr className='hr' />
               <h1 className='font-style'>CONTACT</h1>
    
    {/* contact-section  */}


               <div className="contact-section">
                    <div className="content"><p className='content-change-font font-color font-style'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero a iste corrupti impedit cupiditate saepe, eveniet cum eum ab in fugit incidunt expedita? Debitis harum, exercitationem quam iste odit voluptas.</p></div>

                    <div className="input-first">
                        <input className='font-style' type="text" placeholder='Name' />
                        <input className='font-style' type="text" placeholder='Email' />
                    </div>

                    <div className="text-area">
                         <textarea className='font-style' name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="btn">
                        <button className='font-style'>SEND MESSAGE</button>
                    </div>


               </div>

               {/* lower-section  */}
               <div className="lower-section">

                  <div className="part">
                  <span>
                   <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-circle-filled" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" stroke-width="0" fill="currentColor"></path>
</svg>


                   </span>
                   <h1 className='font-style'>OOps Something Went Wrong</h1>
                  </div>
               </div>

               {/* box-section */}
               <div className="box-section">
                    <div className="same-box">
                         <div className="inner-box">
                         <div className='icon-section'>
                            <MdPhoneAndroid className='icon-wala'/>
                          </div>
                          <div className='call-us'>
                             <p className='contact-font font-color font-style'>Call Us</p>
                          </div>
                          <div className='content'>
                            <p className='font-style'>+91 634567890</p>
                            <p className='font-style'>9:00 am - 17:00 pm</p>
                          </div>
                         </div>
                    </div>
                    <div className="same-box">
                    <div className="inner-box">
                         <div className='icon-section'>
                            <AiOutlineMail className='icon-wala'/>
                          </div>
                          <div className='call-us'>
                             <p className='contact-font font-color font-style'>Email At</p>
                          </div>
                          <div className='content'>
                            <p className='font-style'>pjfitness2675@gmail.com</p>
                            <p className='font-style'>pankaj266@gmail.com</p>
                          </div>
                         </div>
                    </div>
                    <div className="same-box">
                    <div className="inner-box">
                         <div className='icon-section'>
                            <HiOutlineLocationMarker className='icon-wala'/>
                          </div>
                          <div className='call-us'>
                             <p className='contact-font font-color font-style'>Location</p>
                          </div>
                          <div className='content'>
                            <p className='font-style'>PjFitNess Fitness Center Bedford Heights Mumbai </p>
                            
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

export default Contact
