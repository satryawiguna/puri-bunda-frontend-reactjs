import {useMutation, useQuery} from "@tanstack/react-query";
import {UnitService} from "../services/UnitService";


const useFetchAllUnits = (queryString, onSuccess, onError) => {
    return useQuery(['fetch-all-units', queryString], UnitService.fetchAllUnits, {onSuccess, onError})
}

const useFetchAllSearchUnits = (queryString, onSuccess, onError) => {
    return useQuery(['fetch-all-search-units', queryString], UnitService.fetchAllSearchUnits, {onSuccess, onError})
}

const useFetchAllSearchPageUnits = (queryString, onSuccess, onError) => {
    return useQuery(['fetch-all-search-page-units', queryString], UnitService.fetchAllSearchPageUnits, {
        onSuccess,
        onError
    })
}

const useCreateUnit = (onSuccess, onError) => {
    return useMutation(UnitService.createUnit, {onSuccess, onError})
}

const useUpdateUnit = (onSuccess, onError) => {
    return useMutation(UnitService.updateUnit, {onSuccess, onError})
}

const useDeleteUnit = (onSuccess, onError) => {
    return useMutation(UnitService.deleteUnit, {onSuccess, onError})
}

const useGetUnit = (id, onSuccess, onError) => {
    return useQuery(['show-unit', id], UnitService.getUnit, {onSuccess, onError})
}

export {
    useFetchAllUnits,
    useFetchAllSearchUnits,
    useFetchAllSearchPageUnits,
    useCreateUnit,
    useUpdateUnit,
    useDeleteUnit,
    useGetUnit
}
