import axios from "axios";


const GetAllData=(SetAllData,SetFilterData)=>{
   
    axios.get('http://localhost:5000/results').then((res)=>{
        SetAllData(res.data)
        SetFilterData(res.data)
    
    }).catch((err)=>{
      alert('error')
    })
   
}
export default GetAllData