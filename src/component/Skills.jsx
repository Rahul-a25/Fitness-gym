import React from 'react'
import './css/skill.css'
import image from '../Assest/skill-image.jpg'
import { useNavigate } from 'react-router-dom'
const Skills = () => {
    const navigate=useNavigate()
    return (
        <div className='skill-container' >
            <div className='img-wala'>
                <img src={image} alt="" />
            </div>
            <div className='content-wala'>
                <h2 className='font-style' style={{fontSize:"30px"}}>
                    WE’VE SKILL IN <br />
                    WIDE <span className='color'>RANGE OF FITNESS</span> AND OTHER <br /> BODY HEALTH FACILITY.
                </h2>
                <span className='font-style span-wala' >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati similique nemo modi repellendus dolorum impedit pariatur dignissimos velit temporibus! Dicta, assumenda. Veniam quam iusto deleniti, amet reprehenderit explicabo voluptatum et sed quasi, quas sit eum minus perferendis voluptates aspernatur. Provident unde facilis laborum repellendus quo sunt sed quam quibusdam rem.
                </span> <br />
                <button onClick={()=>navigate('/trainer')} className=' btn-content font-style' >Learn More</button>
            </div>
        </div>
    )
}

export default Skills
