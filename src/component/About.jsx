import React from 'react'
import bg from '../Assest/course-bg.jpg'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import './css/about.css'
import pankajimg1 from '../Assest/Pankaj-photo-2.jpg'
import pankaj2 from '../Assest/Pankaj-photo.jpg'
import { CgGym  } from "react-icons/cg";
import Footer from './Footer'
const About = () => {
    const navigate=useNavigate()
  return (
    <div className='about-main'>
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
                         <p onClick={() => navigate('/')} className='navigate-home font-style'>Home</p> <b >|</b><p style={{ marginLeft: "20px", fontSize: "20px", color: "#ff4757" }} className='font-style'>About Us</p>
                    </div>
                    <h1 style={{ color: "white", fontSize: "60px", margin: "0" }} className='font-style'>WHAT WE ARE</h1>
               </div>

               < hr className='hr' />
               <h1 className='font-style'>About Us</h1>
            {/* fist body section */}
               <div className="body-section">
                     <div className='img1-div'>
                        <img className='same-img' src={pankajimg1} alt="" />
                     </div>
                     <div className='img2-div'>
                        <img className='same-img' src={pankaj2} alt="" />
                     </div>
                     <div className='content-div'>
                        <h1 className='font-style font-color'>Pankaj jaiswal</h1>
                        <p className='font-style'>HAVING <span className='color'>10 YEARS</span> OF EXPERIENCE IN FITNESS</p>
                        <span className='font-style span font-color'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in.</span> <br />
                        <button className='font-style btn-about btn-shadow btn button'>Service</button>
                     </div>
               </div>

               {/* second body section */}
               < hr className='hr' />
               <h1 className='font-style'>WHY CHOOSE US</h1>
               <div className="second-section">
                    <div className='same-box-about div-color'>
                         <div className="content-part">
                              <span className='icon-wala '><CgGym className='white' /></span>
                              <p className='about-name white font-style'>EQUIPMENT</p>
                              <p className='font-size-wala white font-style' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo exercitationem consectetur id labore odio culpa saepe itaque, ut at enim?</p>
                         </div>
                    </div>
                    <div className='same-box-about div-color-hover '>
                    <div className="content-part">
                              <span className='icon-wala icon-white'>icon</span>
                              <p className='about-name font-style'>PROFFESIONAL TRAINER</p>
                              <p className='font-size-wala font-style'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt libero quos quia nostrum harum odio quo explicabo sapiente tempora quisquam?.</p>
                         </div>
                    </div>
                    <div className='same-box-about div-color'>
                    <div className="content-part">
                              <span className='icon-wala white'>icon</span>
                              <p className='about-name white font-style'>HEALTHY DIET PLAN</p>
                              <p className='font-size-wala white font-style'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel officia eveniet officiis modi nulla et ipsa? Velit, neque quidem?.</p>
                         </div>
                    </div>
                    <div className='same-box-about div-color-hover '>
                    <div className="content-part">
                              <span className='icon-wala icon-white'>icon</span>
                              <p className='about-name font-style'>EQUIPMENT</p>
                              <p className='font-size-wala font-style'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia neque dolor corrupti possimus laborum quasi delectus? Officiis reiciendis aperiam odio?.</p>
                         </div>
                    </div>
                    <div className='same-box-about div-color'>
                    <div className="content-part">
                              <span className='icon-wala white'>icon</span>
                              <p className='about-name white font-style'>EQUIPMENT</p>
                              <p className='font-size-wala white font-style'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, maxime eius. Minus eaque illum, eum corporis doloremque reprehenderit deleniti aliquid?.</p>
                         </div>
                    </div>
                    <div className='same-box-about div-color-hover '>
                    <div className="content-part">
                              <span className='icon-wala icon-white'>icon</span>
                              <p className='about-name font-style'>EQUIPMENT</p>
                              <p className='font-size-wala font-style'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In distinctio tempora ipsam dolore rem consequatur eveniet iure eius accusamus et.</p>
                         </div>
                    </div>
               </div>

               <div className="">
                  <Footer/>
               </div>
    </div>
  )
}

export default About
