import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CART_REDUCER_FEATURE_KEY } from './../Constant';
import { increamentQty } from '../slice/CartSlice';
import { decreamentQty } from '../slice/CartSlice';


export default function Cart() {
  const dispatch = useDispatch();
  const cartInfo = useSelector((state)=>{
    return state[CART_REDUCER_FEATURE_KEY]
  });

  const updateQty= () => {
    dispatch(increamentQty({increamentQty:1}));
  }
  const downgradQty= () => {
    dispatch(decreamentQty({decreamentQty:1}));
  }

  return (
    <div>
        <p>qty : {cartInfo.cart.qty}</p>
        <p><button  className='me-3' onClick={updateQty}>plus</button><button onClick={downgradQty}>minus</button></p>
    </div>
  )
}
