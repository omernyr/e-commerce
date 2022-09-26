import { configureStore } from '@reduxjs/toolkit'
import authSlice from './stores/authSlice'
import orderSlice from './stores/orderSlice'
import productSlice from './stores/productSlice'
export default configureStore({
    reducer: {
        orderSlice: orderSlice,
        productSlice: productSlice,
        authSlice: authSlice,

    },
})