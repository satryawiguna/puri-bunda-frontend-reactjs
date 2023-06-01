import axios from 'axios';
import {store} from "../app/store";
import {logoutAction} from "../features/authSlice";

const Api = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_API_URL}`,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    withCredentials: true,
    timeout: 100000,
})

Api.interceptors.request.use((request) => {
    return request
}, (error) => {
    return error
})

Api.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    if (!error.response) throw new Error('Error connection')

    if (error.response.status === 401) {
        axios.post(`${process.env.REACT_APP_BASE_API_URL}auth/logout`)
            .then((res) => {
                store.dispatch(logoutAction())

                setAuthToken(null)
                setAuthType(null)

                window.location.reload()
            })
    }

    return Promise.reject(error.response.data);
})

export const setAuthToken = (access_token) => {
    Api.defaults.headers.common['Authorization'] = '';

    delete Api.defaults.headers.common['Authorization'];

    if (access_token) {
        Api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    }
}

export const setAuthType = (authType) => {
    Api.defaults.headers.common['AuthType'] = '';

    delete Api.defaults.headers.common['AuthType'];

    if (authType) {
        Api.defaults.headers.common['AuthType'] = authType;
    }
}

export default Api
