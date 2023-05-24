import Api from '../libs/HttpClient'

class MovieService {
    static fetchAllMovies(request) {
        return Api.post('/movie/fetchAll', request)
    }

    static fetchMyFavoriteMovies(request) {
        return Api.get('/user/movie/favorite')
    }

    static createMovie(request) {
        return Api.post('/movie/create', request)
    }

    static updateMovie(request) {
        const id = request.id

        return Api.put(`/movie/${id}/update`, request)
    }

    static deleteMovie(id) {
        return Api.delete(`/movie/${id}`)
    }

    static getMovie(request) {
        const id = request.queryKey[1]

        return Api.get(`/movie/${id}`)
    }

    static favoriteMovie(id) {
        return Api.get(`/user/movie/${id}/favorite`)
    }
}

export {MovieService}
