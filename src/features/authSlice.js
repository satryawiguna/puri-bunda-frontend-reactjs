import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    tokens: {},
    isLoggedIn: false
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        loginAction: (state, {payload}) => {
            state.userInfo = payload.userInfo
            state.tokens = payload.tokens
            state.isLoggedIn = true

            return state
        },
        logoutAction: () => initialState,
        updateUserInfoAction: (state, {payload}) => {
            state.userInfo = payload.userInfo

            return state
        },
        updateTokenAction: (state, {payload}) => {
            state.tokens = payload.data

            return state
        }
    },
})

export const {loginAction, logoutAction, updateLoginInfoAction, updateTokenAction} = authSlice.actions

export default authSlice.reducer
