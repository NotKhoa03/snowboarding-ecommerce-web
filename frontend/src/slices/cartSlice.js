import { createSlice } from '@reduxjs/toolkit'
import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : {cartItems: []};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            //payload consists of the product information along with the quantity selected
            const item = action.payload;
            const existItem = state.cartItems.find(x => x._id === item._id);

            //Update the quantity if the item already exists in the cart
            if (existItem) {
                state.cartItems = state.cartItems.map(x => x._id === existItem._id ? item : x)
            } else {
                state.cartItems = [...state.cartItems, item]
            }

            //Updates the state of the cart with total price, shipping, tax, etc.
            return updateCart(state)
           
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(x => x._id !== action.payload)
            return updateCart(state)
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer