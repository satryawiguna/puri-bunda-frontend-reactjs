import Api from "../libs/HttpClient";

class DashboardService {
    static getCountTotalEmployee(request) {
        const queryString = request.queryKey[1]

        return Api.get(`/dashboard/count-total-employee/?start_date=${queryString.start_date}&end_date=${queryString.end_date}`)
    }

    static getCountTotalLogin(request) {
        const queryString = request.queryKey[1]

        return Api.get(`/dashboard/count-total-login/?start_date=${queryString.start_date}&end_date=${queryString.end_date}`)
    }

    static getCountTotalUnit() {
        return Api.get(`/dashboard/count-total-unit`)
    }

    static getCountTotalPosition() {
        return Api.get(`/dashboard/count-total-position`)
    }

    static getTopTenUserByLogin(request) {
        const queryString = request.queryKey[1]

        return Api.get(`/dashboard/top-ten-user-by-login/?start_date=${queryString.start_date}&end_date=${queryString.end_date}`)
    }
}

export {DashboardService}
