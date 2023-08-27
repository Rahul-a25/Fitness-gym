 export const AllData=(Data)=>{
    return {
        type:'Data',
        payload:Data
    }
}

export const FilterData=(Data)=>{
   return{
    type:"filter",
    payload:Data
   }
}
export const Body=(Data)=>{
    return {
        type:'body',
        payload:Data
    }
}

export const Cardio=(Data)=>{
    return {
        type:'cardio',
        payload:Data
    }
}
export const Chest=(Data)=>{
    return {
        type:'chest',
        payload:Data
    }
}

export const LowerArms=(Data)=>{
    return {
        type:'lowerarms',
        payload:Data
    }
}

export const Shoulders=(Data)=>{
    return {
        type:'shoulders',
        payload:Data
    }
}

export const UpperArms=(Data)=>{
    return {
        type:'upperarms',
        payload:Data
    }
}
export const Lowerlegs=(Data)=>{
    return {
        type:'lowerlegs',
        payload:Data
    }
}
export const Upperlegs=(Data)=>{
    return {
        type:'upperlegs',
        payload:Data
    }
}
export const Waist=(Data)=>{
    return {
        type:'waist',
        payload:Data
    }
}
export const singleData=(Data)=>{
    return{
        type:"singleData",
        payload:Data
    }
}
export const favourite=(Data)=>{
   return {
    type:"addfavourite",
    payload:Data
   }
} 
export const BgColor=(color,Data)=>{
    return{
        type:'addcolor',
        payload:color,
        Data:Data
    }
}
export const search=(Data)=>{
  return {
    type:"search",
    payload:Data
  }
}
export const DeleteAction=(Data)=>{
  return {
    type:"del",
    payload:Data
  }
}

