import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit"
import {authReducer, adminAuthReducer, productReducer, errorReducer}  from './index'
const store = configureStore({
    reducer : {
        auth : authReducer,
        adminAuth : adminAuthReducer,
        product : productReducer,
        error: errorReducer
    }
})


export default store