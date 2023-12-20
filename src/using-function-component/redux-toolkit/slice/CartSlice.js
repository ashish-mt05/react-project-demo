import { createSlice } from "@reduxjs/toolkit"
//create one initialState
const initialState = {
    cart: {
        qty: 10
    }
}
//create slice inside that define action and reducer using createSlice.
//createSlice take object as argument
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increamentQty: (state, action) => {
            //extract quantity from state and update.
            //extract data from action by which you want to update state data.
            state.cart.qty = state.cart.qty + action.payload.increamentQty
        },
        decreamentQty: (state, action) => {
            //extract quantity from state and update.
            //extract data from action by which you want to update state data.
            state.cart.qty = state.cart.qty > 0 ? state.cart.qty - action.payload.decreamentQty : 0
        }
    }
})
//extract action (cartSlice.actions return all action defind inside slice)
export const {increamentQty, decreamentQty} = cartSlice.actions;
//export reducer from carSlice(cartSlice.reducer give reducer)
export default cartSlice.reducer;
