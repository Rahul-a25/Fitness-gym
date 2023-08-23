import React from 'react'
import './css/skill.css'
import image from '../Assest/skill-image.jpg'
const Skills = () => {
    return (
        <div className='skill-container' style={{border:"2px solid red"}}>
            <div className='img-wala'>
                <img src={image} alt="" />
            </div>
            <div className='content-wala'>
                <h2>
                    WE’VE SKILL IN <br />
                    WIDE RANGE OF FITNESS AND OTHER <br /> BODY HEALTH FACILITY.
                </h2>
                <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati similique nemo modi repellendus dolorum impedit pariatur dignissimos velit temporibus! Dicta, assumenda. Veniam quam iusto deleniti, amet reprehenderit explicabo voluptatum et sed quasi, quas sit eum minus perferendis voluptates aspernatur. Provident unde facilis laborum repellendus quo sunt sed quam quibusdam rem.
                </span> <br />
                <button className='btn' style={{marginTop:"25px"}} >Learn More</button>
            </div>
        </div>
    )
}

export default Skills
