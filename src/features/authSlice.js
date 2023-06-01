import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    access_token: "",
    isLoggedIn: false
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        loginAction: (state, {payload}) => {
            state.userInfo = payload.userInfo
            state.access_token = payload.access_token
            state.isLoggedIn = true

            return state
        },
        logoutAction: () => initialState,
        updateUserInfoAction: (state, {payload}) => {
            state.userInfo = payload.userInfo

            return state
        }
    },
})

export const {loginAction, logoutAction, updateUserInfoAction} = authSlice.actions

export default authSlice.reducer
