import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { authReducer, adminAuthReducer, productReducer, errorReducer, cartReducer } from './index'
import { persistReducer, persistStore } from 'redux-persist'
import storage from "redux-persist/lib/storage"


const rootReducer = combineReducers({
    auth: authReducer,
    adminAuth: adminAuthReducer,
    product: productReducer,
    error: errorReducer,
    cart: cartReducer
})

const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer
})

const persistor = persistStore(store)

export { store, persistor }