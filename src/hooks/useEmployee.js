import {useMutation, useQuery} from "@tanstack/react-query";
import {EmployeeService} from "../services/EmployeeService";


const useFetchAllEmployees = (queryString, onSuccess, onError) => {
    return useQuery(['fetch-all-employees', queryString], EmployeeService.fetchAllEmployees, {onSuccess, onError})
}

const useFetchAllSearchEmployees = (queryString, onSuccess, onError) => {
    return useQuery(['fetch-all-search-employees', queryString], EmployeeService.fetchAllSearchEmployees, {
        onSuccess,
        onError
    })
}

const useFetchAllSearchPageEmployees = (queryString, onSuccess, onError) => {
    return useQuery(['fetch-all-search-page-employees', queryString], EmployeeService.fetchAllSearchPageEmployees, {
        onSuccess,
        onError
    })
}

const useCreateEmployee = (onSuccess, onError) => {
    return useMutation(EmployeeService.createEmployee, {onSuccess, onError})
}

const useUpdateEmployee = (onSuccess, onError) => {
    return useMutation(EmployeeService.updateEmployee, {onSuccess, onError})
}

const useDeleteEmployee = (onSuccess, onError) => {
    return useMutation(EmployeeService.deleteEmployee, {onSuccess, onError})
}

const useGetEmployee = (id, onSuccess, onError) => {
    return useQuery(['show-employee', id], EmployeeService.getEmployee, {onSuccess, onError})
}

export {
    useFetchAllEmployees,
    useFetchAllSearchEmployees,
    useFetchAllSearchPageEmployees,
    useCreateEmployee,
    useUpdateEmployee,
    useDeleteEmployee,
    useGetEmployee
}
