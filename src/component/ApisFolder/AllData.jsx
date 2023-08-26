import axios from "axios";
import { AllData, FilterData } from "../Redux/action";


const GetAllData=(dispatch)=>{
  // SetAllData,SetFilterData
    axios.get('http://localhost:5000/results').then((res)=>{
         dispatch(AllData(res.data))
         dispatch(FilterData(res.data))
        // SetAllData(res.data)
        // SetFilterData(res.data)
    
    }).catch((err)=>{
      alert('error')
    })
   
}
export default GetAllData