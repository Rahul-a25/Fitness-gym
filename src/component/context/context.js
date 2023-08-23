import { createContext, useState } from "react";
 export const mycontext =createContext()
function CustomContext({children}){
    const[AllData,SetAllData] =useState([])
    const[FilterData,SetFilterData] =useState([])
    console.log(AllData);
    console.log(FilterData)
    return (
        <mycontext.Provider value={{AllData,SetAllData,FilterData,SetFilterData}}>
            {children}
        </mycontext.Provider>
    )
}
export default CustomContext;
