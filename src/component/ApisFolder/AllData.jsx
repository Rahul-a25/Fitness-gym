import axios from "axios";
import { AllData, FilterData } from "../Redux/action";


const GetAllData= async(dispatch) =>{
    axios.get('http://localhost:5000/results').then((res)=>{
         dispatch(AllData(res.data))
         dispatch(FilterData(res.data))
        // SetAllData(res.data)
        // SetFilterData(res.data)
    
    }).catch((err)=>{
      alert('error')
    })
  

    // const options = {
    //   method: 'GET',
    //   url: 'https://exercisedb.p.rapidapi.com/exercises',
    //   headers: {
    //     'X-RapidAPI-Key': 'f41c2f25b7mshbb2475314b3780ep1e9f08jsn34f500ddbe3f',
    //     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    //   }
    // };
    
    // try {
    //   const response = await axios.request(options);
    //   console.log(response.data);
    //   dispatch(AllData(response.data))
    //   dispatch(FilterData(response.data))
    // } catch (error) {
    //   console.error(error);
    // }
   
}
export default GetAllData