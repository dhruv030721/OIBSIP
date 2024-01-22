import { configureStore } from "@reduxjs/toolkit"
import { authReducer, adminAuthReducer, productReducer, errorReducer, cartReducer } from './index'

const store = configureStore({
    reducer: {
        auth: authReducer,
        adminAuth: adminAuthReducer,
        product: productReducer,
        error: errorReducer,
        cart: cartReducer
    }
})


export {store}