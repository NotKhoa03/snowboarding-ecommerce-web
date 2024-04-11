import { createSlice } from '@reduxjs/toolkit'

// Be able to set and remove users from local storage

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Set the user info in local storage
        setCredentials: (state, action) => {
            state.userInfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        }
    }
})

export const { setCredentials } = authSlice.actions

export default authSlice.reducer