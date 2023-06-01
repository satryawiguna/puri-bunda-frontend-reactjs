import {useQuery} from "@tanstack/react-query";
import {DashboardService} from "../services/DashboardService";

const useGetCountTotalEmployee = (queryString, onSuccess, onError) => {
    return useQuery(['get-count-total-employee', queryString], DashboardService.getCountTotalEmployee, {
        onSuccess,
        onError
    })
}

const useGetCountTotalLogin = (queryString, onSuccess, onError) => {
    return useQuery(['get-count-total-login', queryString], DashboardService.getCountTotalLogin, {onSuccess, onError})
}

const useGetCountTotalUnit = (queryString, onSuccess, onError) => {
    return useQuery(['get-count-total-unit'], DashboardService.getCountTotalUnit, {onSuccess, onError})
}

const useGetCountTotalPosition = (onSuccess, onError) => {
    return useQuery(['get-count-total-position'], DashboardService.getCountTotalPosition, {onSuccess, onError})
}

const useGetTopTenUserByLogin = (queryString, onSuccess, onError) => {
    return useQuery(['get-top-ten-user-by-login', queryString], DashboardService.getTopTenUserByLogin, {
        onSuccess,
        onError
    })
}

export {
    useGetCountTotalEmployee,
    useGetCountTotalLogin,
    useGetCountTotalUnit,
    useGetCountTotalPosition,
    useGetTopTenUserByLogin
}
