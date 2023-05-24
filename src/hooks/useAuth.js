import {useMutation} from "@tanstack/react-query";
import {AuthService} from "../services/AuthService";

const useLogin = (onSuccess, onError) => {
    return useMutation(AuthService.login, {onSuccess, onError});
}

const useLogout = (onSuccess, onError) => {
    return useMutation(AuthService.logout, {onSuccess, onError});
}

const useRegister = (onSuccess, onError) => {
    return useMutation(AuthService.register, {onSuccess, onError})
}

const useRefreshToken = (onSuccess, onError) => {
    return useMutation(AuthService.refreshToken, {onSuccess, onError});
}

export {
    useLogin,
    useLogout,
    useRegister,
    useRefreshToken
}
