import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {persistReducer, persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"

import authReducer from "../features/authSlice"

const persistRootConfig = {
    key: "root",
    storage,
    blacklist: [],
}

const rootReducer = combineReducers({
    auth: authReducer,
})

const persistedReducer = persistReducer(persistRootConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
})

let persistor = persistStore(store)

export {persistor, store}
