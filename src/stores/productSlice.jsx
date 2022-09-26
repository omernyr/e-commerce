import { createSlice } from "@reduxjs/toolkit";
import ürünler from "../productsAPI";

export const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        products: JSON.parse(localStorage.getItem('products')) || [],
    },
    reducers: {
        addProduct: (state, action) => {

            state.products.push(action.payload)
            localStorage.setItem('products', JSON.stringify(state.products))
            console.log(action.payload);
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload.id)
            localStorage.setItem('products', JSON.stringify(state.products))
        },
        setProduct: (state, action) => {
            state.products = state.products.map((product) => {
                if (product.id === action.payload.id) {
                    return action.payload
                } else {
                    return product
                }
            })
            localStorage.setItem('products', JSON.stringify(state.products))
        },
    },
})
export const { addProduct, deleteProduct, setProduct } = productSlice.actions
export default productSlice.reducer