import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slice/CartSlice'
import { CART_REDUCER_FEATURE_KEY} from './../Constant';
import TodoSliceReducer from '../api-call-using-thung/TodoSlice';

const store = configureStore({
    reducer :{
        [CART_REDUCER_FEATURE_KEY] : cartReducer,
        todoData : TodoSliceReducer
    }
})

export default store;