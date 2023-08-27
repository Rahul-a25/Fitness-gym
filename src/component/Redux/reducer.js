const initial={
     AllData:[],
     FilterData:[],
     SingleData:[],
     AddToFavourite:[],
     AddColor:"black",

}
const myreducer=(state=initial,action)=>{
    switch(action.type){
        case 'Data':
            state={
                ...state,
                AllData:action.payload
            }
            break
            case 'filter':
            state={
                ...state,
                FilterData:action.payload
            }
            break
            case 'body':
            state={
                ...state,
                AllData:state.FilterData.filter((e)=>e.bodyPart==='back')
            }
            break
            case 'cardio':
            state={
                ...state,
                AllData:state.FilterData.filter((e)=>e.bodyPart==='cardio')
            }
            break
            case 'chest':
            state={
                ...state,
                AllData:state.FilterData.filter((e)=>e.bodyPart==='chest')
            }
            break
            case 'lowerarms':
            state={
                ...state,
                AllData:state.FilterData.filter((e)=>e.bodyPart==='lower arms')
            }
            break
            case 'lowerlegs':
            state={
                ...state,
                AllData:state.FilterData.filter((e)=>e.bodyPart==='lower legs')
            }
            break
            case 'shoulders':
            state={
                ...state,
                AllData:state.FilterData.filter((e)=>e.bodyPart==='shoulders')
            }
            break
            case 'upperarms':
            state={
                ...state,
                AllData:state.FilterData.filter((e)=>e.bodyPart==='upper arms')
            }
            break
            case 'upperlegs':
            state={
                ...state,
                AllData:state.FilterData.filter((e)=>e.bodyPart==='upper legs')
            }
            break
            case 'waist':
            state={
                ...state,
                AllData:state.FilterData.filter((e)=>e.bodyPart==='waist')
            }
            break;
            case 'singleData':
                state={
                    ...state,
                    SingleData:action.payload
                }
                break;
                case 'addfavourite':
                    // const existingItem = state.AddToFavourite.find((item) => item.id === action.payload.id);
                    // if(existingItem){
                      return{
                        ...state,
                        // AddToFavourite:state.AddToFavourite.map((item) =>
                        //         item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item),
                        AddToFavourite:[...state.AddToFavourite,action.payload]
                         
                      }
                     
                    // }
                    // else{
                    //   return{
                    //     ...state,
                    //     // updated
                    //    AddToFavourite: [...state.AddToFavourite, {...action.payload,qty:1}],
                    //   }
                //   }
        
                    // const existingItem = state.AddToFavourite.find((item) => item.id === action.payload.id);
                    //     if(existingItem){
                    //       return{
                    //         ...state,
                    //         AddToFavourite:state.AddToFavourite.map((item) =>
                    //                 item.id === action.payload.id ? item: item),
                    //         AddColor:state.AddColor
                            
                    //       }
                         
                    //     }
                    //     else{
                    //       return{
                    //         ...state,
                    //         // updated
                    //        AddToFavourite: [...state.AddToFavourite,action.payload],
                    //        AddColor:'#ff4757'
                    //       }}
                    break
                    // case 'addcolor':
                    //     // const sameId=state.AddToFavourite.find((item)=>item.id===action.payload.id)
                    //     // if(sameId){
                    //         const sameitem = state.AddToFavourite.find((item) => item.id === action.payload.id);
                    //         if(sameitem ){
                    //           return{
                    //             ...state,
                    //             // AddToFavourite:state.AddToFavourite.map((item) =>
                    //             //         item.id === action.payload.id ? item: item),
                    //             AddColor:action.payload
                                
                    //           }
                             
                    //         }
                    //         else{
                    //           return{
                    //             ...state,
                    //             // updated
                    //         //    AddToFavourite: [...state.AddToFavourite, {...action.payload}],
                    //            AddColor:'#ff4757'
                    //           }}
                            if(state.AddColor==='#ff4757'){
                                return{
                                   ...state,
                                   AddColor:action.payload
                                }
                            }
                            else{
                                return{
                                    ...state,
                                    AddColor:'#ff4757'
                                }
                            }
                        break
                        case 'search':
                state={
                    ...state,
                    
                    AllData:state.FilterData.filter((e)=>e.bodyPart.toLowerCase().includes(action.payload)),
                    // AllData:state.FilterData.filter((e)=>e.target.toLowerCase().includes(action.payload)),
                    // AllData:state.FilterData.filter((e)=>e.equipment.toLowerCase().includes(action.payload)),
                }
                break;
                case 'del':
                    state={
                        ...state,
                        AddToFavourite:state.AddToFavourite.filter((id)=>action.payload!=id)
                    }
                    break;
    }
    return state
}
export default myreducer