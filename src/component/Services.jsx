import React from 'react'
import './css/service.css'
import { GiWeightLiftingUp } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { BiCycling } from "react-icons/bi";
import { IoIosBody } from "react-icons/io";
import {TbYoga} from "react-icons/tb";
const Services = () => {
  return (
    <div className='service-container'>
      <h1 className='font-style' style={{ margin: '0' }}>OUR SERVICES</h1>
      <span className='font-style font-color' >We offer more than 35 group exercis, aerobic classes each week.</span>
      <div className="box">
        <div className='weight same'>
          <div className='center-same'>
            <span><GiWeightLiftingUp className='icon-wala' /></span>
            <h1 className='font-style '>WEIGHT LIFTING</h1>
            <p className='font-style font-color'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ipsa saepe placeat ducimus illum enim eligendi veniam nam reiciendis minima!</p>
          </div>
        </div>
        <div className='cycle same'>

          <div className='center-same'>
            <span><BiCycling className='icon-wala' /></span>
            <h1 className='font-style'>CYCLING</h1>
            <p className='font-style font-color'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ipsa saepe placeat ducimus illum enim eligendi veniam nam reiciendis minima!</p>
          </div>
        </div>
        <div className='yoga same'>
          <div className='center-same'>
            <span><GrYoga className='icon-wala'/></span>
            <h1 className='font-style'>YOGA MEDIDATION</h1>
            <p className='font-style font-color'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ipsa saepe placeat ducimus illum enim eligendi veniam nam reiciendis minima!</p>
          </div>
        </div>
        <div className='body same'>

          <div className='center-same'>
            <span><IoIosBody className='icon-wala' /></span>
            <h1 className='font-style'>BUILDING BODY</h1>
            <p className='font-style font-color'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ipsa saepe placeat ducimus illum enim eligendi veniam nam reiciendis minima!</p>
          </div>
        </div>
        <div className='track same'>

          <div className='center-same'>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-wala icon-tabler icon-tabler-stretching" width="100" height="100" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M16 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M5 20l5 -.5l1 -2"></path>
                <path d="M18 20v-5h-5.5l2.5 -6.5l-5.5 1l1.5 2"></path>
              </svg>


            </span>
            <h1 className='font-style'>FITNESS TRACK</h1>
            <p className='font-style font-color'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ipsa saepe placeat ducimus illum enim eligendi veniam nam reiciendis minima!</p>
          </div>
        </div>
        <div className='fitness same'>
          <div className='center-same'>
            <span><TbYoga className='icon-wala'/></span>
            <h1 className='font-style'>FITNESS</h1>
            <p className='font-style font-color'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ipsa saepe placeat ducimus illum enim eligendi veniam nam reiciendis minima!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
