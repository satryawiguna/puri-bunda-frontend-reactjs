import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDeleteUnit, useFetchAllSearchPageUnits} from "../../../hooks";
import moment from "moment";

const UnitIndex = () => {
    const navigate = useNavigate()

    const [queryString, setQueryString] = useState({
        search: "",
        orderBy: "id",
        sort: "DESC",
        page: 1,
        perPage: 10
    })

    const {
        data: dataFetchAllSearchPageUnits,
        isLoading: isLoadingFetchAllSearchPageUnits,
        refetch: refetchFetchAllSearchPageUnits
    } = useFetchAllSearchPageUnits(queryString)

    const {mutate: doDeleteUnit} = useDeleteUnit((res) => {
        refetchFetchAllSearchPageUnits()
    }, (err) => {
        //Do nothing
    })

    const handleDeleteMovie = (data) => {
        let id = data.currentTarget.getAttribute('data-id');
        doDeleteUnit(id)
    }

    useEffect(() => {
        refetchFetchAllSearchPageUnits()
    }, [])

    return (
        <>
            <div className="container">
                <section className="section">
                    <div className="columns is-flex-direction-column">
                        <div className="column m-0 p-0">
                            <button type="button" className="button is-success is-pulled-right mb-5"
                                    onClick={() => {
                                        navigate("/admin/unit/create")
                                    }}>
                                Add Unit
                            </button>
                        </div>

                        {!isLoadingFetchAllSearchPageUnits ?
                            <table className="table">
                                <thead>
                                <tr>
                                    <th><abbr title="Title">Title</abbr></th>
                                    <th>Slug</th>
                                    <th><abbr title="Created By">Created By</abbr></th>
                                    <th><abbr title="Created At">Created At</abbr></th>
                                    <th><abbr title="Action">Action</abbr></th>
                                </tr>
                                </thead>
                                <tbody>
                                {dataFetchAllSearchPageUnits.datas.map((fetchAllSearchPageUnit, index) =>
                                    <tr key={fetchAllSearchPageUnit.id}>
                                        <th>{fetchAllSearchPageUnit.title}</th>
                                        <td>{fetchAllSearchPageUnit.slug}</td>
                                        <td>{fetchAllSearchPageUnit.created_by}</td>
                                        <td>{moment(fetchAllSearchPageUnit.created_at).format("MMM, DD YYYY")}</td>
                                        <td>
                                            <Link className="mr-3"
                                                  to={`/admin/unit/${fetchAllSearchPageUnit.id}/edit`}>Edit</Link>
                                            <a data-id={fetchAllSearchPageUnit.id}
                                               onClick={handleDeleteMovie.bind(this)}>Delete</a>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table> : 'Loading...'}
                    </div>
                </section>
            </div>

        </>
    )
}

export default UnitIndex
