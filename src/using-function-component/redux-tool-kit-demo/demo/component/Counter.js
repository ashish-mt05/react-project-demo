import React, { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { increamentCounter } from '../slice/CounterSlice';
import { decreamentCounter } from '../slice/CounterSlice';

export default function Counter() {
  const countInfo = useReducer(state => {
    console.log(state);
    return state.counter
  })
 
  const dispatch = useDispatch();
  const increamentCount = ()=>{
    //when we call dispatch the it automatically got to store, from there it will search corresponding reducer.
    //once reducer found then it will redirect to reducer and perform action which we have defined inside reducer action.
    dispatch(increamentCounter(1));
  }
  const decreamentCount = ()=>{
    dispatch(decreamentCounter(1));
  }
  return (
    <div>
        <p>count : {countInfo.count}</p>
        <hr/>
        <button onClick={increamentCount}>increament</button>
        <button onClick={decreamentCount}>decreament</button>
    </div>
  )
}
