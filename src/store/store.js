// redux
import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'

// 2.
const store = configureStore({
    reducer: {
        userStore: userSlice
    }
})

export default store;