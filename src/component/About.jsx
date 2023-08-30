import React from 'react'
import bg from '../Assest/course-bg.jpg'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import './css/about.css'
import pankajimg1 from '../Assest/Pankaj-photo-2.jpg'
import pankaj2 from '../Assest/Pankaj-photo.jpg'
import { CgGym  } from "react-icons/cg";
import Footer from './Footer'
import { MdSportsGymnastics,MdOutlinePayment} from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaWarehouse } from "react-icons/fa";
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
                        <button onClick={()=>navigate('/exercise')} className='font-style btn-about btn-shadow btn button'>Service</button>
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
                              <span className='icon-wala icon-white'><MdSportsGymnastics/></span>
                              <p className='about-name font-style'>PROFFESIONAL TRAINER</p>
                              <p className='font-size-wala font-style'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt libero quos quia nostrum harum odio quo explicabo sapiente tempora quisquam?.</p>
                         </div>
                    </div>
                    <div className='same-box-about div-color'>
                    <div className="content-part">
                              <span className='icon-wala white'>
                              <svg className='' xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-apple" width="100" height="100" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 14m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
   <path d="M12 11v-6a2 2 0 0 1 2 -2h2v1a2 2 0 0 1 -2 2h-2"></path>
   <path d="M10 10.5c1.333 .667 2.667 .667 4 0"></path>
</svg>
                              </span>
                              <p className='about-name white font-style'>HEALTHY DIET PLAN</p>
                              <p className='font-size-wala white font-style'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel officia eveniet officiis modi nulla et ipsa? Velit, neque quidem?.</p>
                         </div>
                    </div>
                    <div className='same-box-about div-color-hover '>
                    <div className="content-part">
                              <span className='icon-wala icon-white'><AiFillLike/></span>
                              <p className='about-name font-style'>24/7 HELPING PEOPLE</p>
                              <p className='font-size-wala font-style'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia neque dolor corrupti possimus laborum quasi delectus? Officiis reiciendis aperiam odio?.</p>
                         </div>
                    </div>
                    <div className='same-box-about div-color'>
                    <div className="content-part">
                              <span className='icon-wala white'><FaWarehouse/></span>
                              <p className='about-name white font-style'>UNIQUE TO YOUR NEEDS</p>
                              <p className='font-size-wala white font-style'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, maxime eius. Minus eaque illum, eum corporis doloremque reprehenderit deleniti aliquid?.</p>
                         </div>
                    </div>
                    <div className='same-box-about div-color-hover '>
                    <div className="content-part">
                              <span className='icon-wala icon-white'><MdOutlinePayment/></span>
                              <p className='about-name font-style'>ONLINE PAYMENT</p>
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
