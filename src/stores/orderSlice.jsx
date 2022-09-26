import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: 'orderSlice',
    initialState: {
        myorders: JSON.parse(localStorage.getItem('myorders')) || [],
    },
    reducers: {
        addOrder: (state, action) => {
            const index = state.myorders.findIndex(item => item.id === action.payload.id)
            if ( index > -1) {
                state.myorders[index].quantity += action.payload.quantity
            } else state.myorders.push(action.payload)
            localStorage.setItem('myorders', JSON.stringify(state.myorders))
        },
        setOrder: (state, action) => {
            state.myorders.map((myorder) => {
                if (myorder.id === action.payload.id) {
                    return action.payload
                } else {
                    return myorder
                }
            })
            localStorage.setItem('myorders', JSON.stringify(state.myorders))
        },
    },
})

export const { setOrder, addOrder } = orderSlice.actions
export default orderSlice.reducer