import Api from '../libs/HttpClient'

class EmployeeService {
    static fetchAllEmployees(request) {
        const queryString = request.queryKey[1]

        return Api.get(`/employee/list/?order_by=${queryString.orderBy}&sort=${queryString.sort}`)
    }

    static fetchAllSearchEmployees(request) {
        const queryString = request.queryKey[1]

        return Api.get(`/employee/list/search/?search=${queryString.search}&order_by=${queryString.orderBy}&sort=${queryString.sort}`)
    }

    static fetchAllSearchPageEmployees(request) {
        const queryString = request.queryKey[1]

        return Api.get(`/employee/list/search/page/?search=${queryString.search}&order_by=${queryString.orderBy}&sort=${queryString.sort}&page=${queryString.page}&per_page=${queryString.perPage}`)
    }

    static createEmployee(request) {
        return Api.post('/employee', request)
    }

    static updateEmployee(request) {
        const id = request.id

        return Api.put(`/employee/${id}`, request)
    }

    static deleteEmployee(id) {
        return Api.delete(`/employee/${id}`)
    }

    static getEmployee(request) {
        const id = request.queryKey[1]

        return Api.get(`/employee/${id}`)
    }
}

export {EmployeeService}
