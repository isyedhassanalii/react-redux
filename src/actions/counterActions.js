import { DECREASE_COUNTER, INCREASE_COUNTER } from "../constants/counterConstants"

export const increaseCounter=(value)=>{
    return(dispatch)=>{
        dispatch({
            type:INCREASE_COUNTER,
            payload:value
        })
    }
}
export const deccreaseCounter=(value)=>{
    return(dispatch)=>{
        dispatch({
            type:DECREASE_COUNTER,
            payload:value
        })
    }
}