import React, { useEffect } from 'react'
import UpperBox from './UpperBox'
import Skills from './Skills'
import Services from './Services'
import Popular from './Popular'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import GetAllData from './ApisFolder/AllData'
const Home = () => {
 
  const dispatch=useDispatch()
  useEffect(()=>{
    // SetAllData,SetFilterData
      GetAllData(dispatch)
  },[])
  return (
    <div>
         <UpperBox/>
         <Skills/>
         <Services/>
         <Popular/>
         <Footer/>
    </div>
  )
}

export default Home
