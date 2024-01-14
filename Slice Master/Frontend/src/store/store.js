import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit"
import authReducer from '../store/authSlice'
import adminAuthReducer from '../store/adminAuthSlice'
import productReducer from "../store/productSlice"

const store = configureStore({
    reducer : {
        auth : authReducer,
        adminAuth : adminAuthReducer,
        product : productReducer
    }
})


export default store