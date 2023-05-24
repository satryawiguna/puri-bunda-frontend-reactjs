import {useMutation, useQuery} from "@tanstack/react-query";
import {MovieService} from "../services/MovieService";

const useFetchAllMovies = (onSuccess, onError) => {
    return useMutation(MovieService.fetchAllMovies, {onSuccess, onError})
}

const useFetchMyFavoriteMovies = (onSuccess, onError) => {
    return useQuery(['movie-list-favorite'], MovieService.fetchMyFavoriteMovies, {onSuccess, onError})
}

const useCreateMovie = (onSuccess, onError) => {
    return useMutation(MovieService.createMovie, {onSuccess, onError})
}

const useUpdateMovie = (onSuccess, onError) => {
    return useMutation(MovieService.updateMovie, {onSuccess, onError})
}

const useDeleteMovie = (onSuccess, onError) => {
    return useMutation(MovieService.deleteMovie, {onSuccess, onError})
}

const useGetMovie = (id, onSuccess, onError) => {
    return useQuery(['movie-show', id], MovieService.getMovie, {onSuccess, onError})
}

const useFavoriteMovie = (onSuccess, onError) => {
    return useMutation(MovieService.favoriteMovie, {onSuccess, onError})
}

export {
    useFetchAllMovies,
    useFetchMyFavoriteMovies,
    useCreateMovie,
    useUpdateMovie,
    useDeleteMovie,
    useGetMovie,
    useFavoriteMovie
}
