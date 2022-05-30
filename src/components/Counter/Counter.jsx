import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deccreaseCounter, increaseCounter } from '../../actions/counterActions';

const Counter = () => {
    const dispatch=useDispatch();
    const counter = useSelector(state=>state.counter)
  return (
      <>
    <div className='container my-3'>
    <button className="btn btn-primary mx-2"  onClick={()=>dispatch(deccreaseCounter(1))}> - </button>
      Add Subtract counter
    <button className="btn btn-primary mx-2" onClick={()=>dispatch(increaseCounter(1))} > + </button>
    
  </div>
<div className='container my-3'> 
<h3> Counter value is {counter} </h3>
</div>
  </>
  )
}

export default Counter