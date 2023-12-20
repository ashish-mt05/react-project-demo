import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/ProductSlice";

const store = configureStore({
    reducer :{
       products : productReducer
    }
});

export default store;