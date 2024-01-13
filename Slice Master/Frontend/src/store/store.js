import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit"
import authReducer from '../store/authSlice'
import adminAuthReducer from '../store/adminAuthSlice'

const store = configureStore({
    reducer : {
        auth : authReducer,
        adminAuth : adminAuthReducer
    }
})


export default store