import Api from '../libs/HttpClient'

class AuthService {
    static login(request) {
        return Api.post('/auth/login', request)
    }

    static logout(request) {
        return Api.post('/auth/logout', request)
    }

    static register(request) {
        return Api.post('/auth/register', request)
    }

    static refreshToken(request) {
        return Api.post('/auth/refresh-token', request)
    }
}

export {AuthService}
