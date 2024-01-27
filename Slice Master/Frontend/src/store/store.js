import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { authReducer, adminAuthReducer, productReducer, errorReducer, cartReducer } from './index'
import {
    persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    } from 'redux-persist'
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
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

const persistor = persistStore(store)

export { store, persistor }