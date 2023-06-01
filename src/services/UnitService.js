import Api from '../libs/HttpClient'

class UnitService {
    static fetchAllUnits(request) {
        const queryString = request.queryKey[1]

        return Api.get(`/unit/list/?order_by=${queryString.orderBy}&sort=${queryString.sort}`)
    }

    static fetchAllSearchUnits(request) {
        const queryString = request.queryKey[1]

        return Api.get(`/unit/list/search/?search=${queryString.search}&order_by=${queryString.orderBy}&sort=${queryString.sort}`)
    }

    static fetchAllSearchPageUnits(request) {
        const queryString = request.queryKey[1]

        return Api.get(`/unit/list/search/page/?search=${queryString.search}&order_by=${queryString.orderBy}&sort=${queryString.sort}&page=${queryString.page}&per_page=${queryString.perPage}`)
    }

    static createUnit(request) {
        return Api.post('/unit', request)
    }

    static updateUnit(request) {
        const id = request.id

        return Api.put(`/unit/${id}`, request)
    }

    static deleteUnit(id) {
        return Api.delete(`/unit/${id}`)
    }

    static getUnit(request) {
        const id = request.queryKey[1]

        return Api.get(`/unit/${id}`)
    }
}

export {UnitService}
