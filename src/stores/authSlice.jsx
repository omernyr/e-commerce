import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        authCheck: (state) => {
            state.isLoggedIn = true
        },
    },
})

export const { authCheck } = authSlice.actions
export default authSlice.reducer