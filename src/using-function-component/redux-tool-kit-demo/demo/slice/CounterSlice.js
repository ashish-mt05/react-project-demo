import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    //slice name
    name : 'counter',
    //initial state(this once bydefault assigned to state)
    initialState : {
        count : 10
    },
    //reducers{} object here inside reducer we need to create action
    reducers :{
         //action for increament counter
         increamentCounter(state, action){
            //bydefault action has payload.
            state.count += action.payload
         },
         //action for decreament counter
         decreamentCounter(state, action){
            state.count -= action.payload
         },
    }
    
});

//to use action in other component, we need export action(counterSlice.actions return all action present inside reducers)
export const {increamentCounter, decreamentCounter} = counterSlice.actions;

//export reducers to use in store.
export default counterSlice.reducer