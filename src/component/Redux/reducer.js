const initial={
     AllData:[],
     FilterData:[]
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
            break
    }
    return state
}
export default myreducer