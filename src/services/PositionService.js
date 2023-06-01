import Api from '../libs/HttpClient'

class PositionService {
    static fetchAllPositions(request) {
        const queryString = request.queryKey[1]

        return Api.get(`/position/list/?order_by=${queryString.orderBy}&sort=${queryString.sort}`)
    }

    static fetchAllSearchPositions(request) {
        const queryString = request.queryKey[1]

        return Api.get(`/position/list/search/?search=${queryString.search}&order_by=${queryString.orderBy}&sort=${queryString.sort}`)
    }

    static fetchAllSearchPagePositions(request) {
        const queryString = request.queryKey[1]

        return Api.get(`/position/list/search/page/?search=${queryString.search}&order_by=${queryString.orderBy}&sort=${queryString.sort}&page=${queryString.page}&perPage=${queryString.perPage}`)
    }

    static createPosition(request) {
        return Api.post('/position', request)
    }

    static updatePosition(request) {
        const id = request.id

        return Api.put(`/position/${id}`, request)
    }

    static deletePosition(id) {
        return Api.delete(`/position/${id}`)
    }

    static getPosition(request) {
        const id = request.queryKey[1]

        return Api.get(`/position/${id}`)
    }
}

export {PositionService}
