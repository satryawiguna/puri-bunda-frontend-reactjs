import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import DataTable from 'react-data-table-component';
import {useFetchAllSearchPageEmployees} from "../../../hooks";
import moment from "moment";

const EmployeeIndex = () => {
    const navigate = useNavigate()

    const [queryString, setQueryString] = useState({
        search: "",
        orderBy: "id",
        sort: "DESC",
        page: 1,
        perPage: 10
    })

    const {
        data: dataFetchAllSearchPageEmployees,
        isLoading: isLoadingFetchAllSearchPageEmployees,
        refetch: refetchFetchAllSearchPageEmployees
    } = useFetchAllSearchPageEmployees(queryString)

    const columns = [
        {
            name: 'Nick Name',
            selector: row => row.nick_name,
            sortable: true
        },
        {
            name: 'Full Name',
            selector: row => row.full_name,
            sortable: true
        },
        {
            name: 'Join Date',
            selector: row => row.join_date,
            format: row => moment(row.join_date).format("MMM, DD YYYY"),
            sortable: true
        },
        {
            name: 'Unit',
            selector: row => row.unit?.title,
        },
        {
            name: 'Positions',
            selector: row => row.positions,
        },
    ];

    useEffect(() => {
        refetchFetchAllSearchPageEmployees();
    }, [queryString.page]);

    return (
        <>
            <div className="container">
                <section className="section">
                    <div className="columns is-flex-direction-column">
                        <div className="column m-0 p-0">
                            <button type="button" className="button is-success is-pulled-right mb-5"
                                    onClick={() => {
                                        navigate("/admin/employee/create")
                                    }}>
                                Add Employee
                            </button>
                        </div>
                        {!isLoadingFetchAllSearchPageEmployees ?
                            <DataTable
                                columns={columns}
                                data={dataFetchAllSearchPageEmployees.datas}
                                highlightOnHover
                                pagination
                                paginationServer
                                paginationTotalRows={dataFetchAllSearchPageEmployees.meta.total_count}
                                paginationPerPage={dataFetchAllSearchPageEmployees.meta.per_page}
                                paginationComponentOptions={{
                                    noRowsPerPage: true
                                }}
                                onChangePage={page => queryString.page = page}
                            /> : 'Loading...'
                        }
                    </div>
                </section>
            </div>

        </>
    )
}

export default EmployeeIndex
