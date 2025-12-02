import React,{useReducer} from 'react'


const Reducer = (state, action) =>{
    switch(action.type){
        case "inc":
            return {...state, count:state.count+1}
        case "dec":
            return {...state, count:state.count -1}
        case "reset" :
            return {...state, count:0}
        case "click":
            return {...state,message:"good evening"}
        case "name":
            return {...state, name:action.payload}
        case "submit":
            return {...state, data:{username:state.name}, name:""}
        default :
            return state
    }
}
const initialState = {
    count:5,
    message: "",
    name:"",
    data:{}
}

export const DemoUsereducer = () => {
    const  [state, dispatch] = useReducer(Reducer, initialState)
    const handleInc = () =>{
        dispatch({type:"inc"})
    }

    const handleDec = () =>{
        dispatch({type:"dec"})
    }
 
    
    return (
    <div>
        <h4>Demo Usereducer</h4>
        <p>Count {state.count}</p>
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
        <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
        <p>{state.message}</p>
        <button onClick={()=>dispatch({type:"click"})}>click me</button>
        <input type='text' name="name" onChange={(e)=>dispatch({type:"name", payload:e.target.value})} value={state.name} />
        <button onClick={()=>dispatch({type:"submit"})}>submit</button>
        <p>username {state?.data?.username}</p>
    </div>
  )
}
