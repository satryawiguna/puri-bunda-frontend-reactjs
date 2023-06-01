import {useMutation, useQuery} from "@tanstack/react-query";
import {PositionService} from "../services/PositionService";

const useFetchAllPositions = (queryString, onSuccess, onError) => {
    return useQuery(['fetch-all-positions', queryString], PositionService.fetchAllPositions, {onSuccess, onError})
}

const useFetchAllSearchPositions = (queryString, onSuccess, onError) => {
    return useQuery(['fetch-all-search-positions', queryString], PositionService.fetchAllSearchPositions, {
        onSuccess,
        onError
    })
}

const useFetchAllSearchPagePositions = (queryString, onSuccess, onError) => {
    return useQuery(['fetch-all-search-page-positions', queryString], PositionService.fetchAllSearchPagePositions, {
        onSuccess,
        onError
    })
}

const useCreatePosition = (onSuccess, onError) => {
    return useMutation(PositionService.createPosition, {onSuccess, onError})
}

const useUpdatePosition = (onSuccess, onError) => {
    return useMutation(PositionService.updatePosition, {onSuccess, onError})
}

const useDeletePosition = (onSuccess, onError) => {
    return useMutation(PositionService.deletePosition, {onSuccess, onError})
}

const useGetPosition = (id, onSuccess, onError) => {
    return useQuery(['show-position', id], PositionService.getPosition, {onSuccess, onError})
}

export {
    useFetchAllPositions,
    useFetchAllSearchPositions,
    useFetchAllSearchPagePositions,
    useCreatePosition,
    useUpdatePosition,
    useDeletePosition,
    useGetPosition
}
