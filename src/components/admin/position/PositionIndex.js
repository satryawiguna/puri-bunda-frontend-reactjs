import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {
    useDeletePosition,
    useFetchAllSearchPagePositions
} from "../../../hooks";
import moment from "moment/moment";

const PositionIndex = () => {
    const navigate = useNavigate()

    const [queryString, setQueryString] = useState({
        search: "",
        orderBy: "id",
        sort: "DESC",
        page: 1,
        perPage: 10
    })

    const {
        data: dataFetchAllSearchPagePositions,
        isLoading: isLoadingFetchAllSearchPagePositions,
        refetch: refetchFetchAllSearchPagePositions
    } = useFetchAllSearchPagePositions(queryString)

    const {mutate: doDeletePosition} = useDeletePosition((res) => {
        refetchFetchAllSearchPagePositions()
    }, (err) => {
        //Do nothing
    })

    const handleDeletePosition = (data) => {
        let id = data.currentTarget.getAttribute('data-id');
        doDeletePosition(id)
    }

    useEffect(() => {
        refetchFetchAllSearchPagePositions()
    }, [])

    return (
        <>
            <div className="container">
                <section className="section">
                    <div className="columns is-flex-direction-column">
                        <div className="column m-0 p-0">
                            <button type="button" className="button is-success is-pulled-right mb-5"
                                    onClick={() => {
                                        navigate("/admin/position/create")
                                    }}>
                                Add Movie
                            </button>
                        </div>

                        {!isLoadingFetchAllSearchPagePositions ?
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
                                {dataFetchAllSearchPagePositions.datas.map((fetchAllSearchPagePosition, index) =>
                                    <tr key={fetchAllSearchPagePosition.id}>
                                        <th>{fetchAllSearchPagePosition.title}</th>
                                        <td>{fetchAllSearchPagePosition.slug}</td>
                                        <td>{fetchAllSearchPagePosition.created_by}</td>
                                        <td>{moment(fetchAllSearchPagePosition.created_at).format("MMM, DD YYYY")}</td>
                                        <td>
                                            <Link className="mr-3"
                                                  to={`/admin/position/${fetchAllSearchPagePosition.id}/edit`}>Edit</Link>
                                            <a data-id={fetchAllSearchPagePosition.id}
                                               onClick={handleDeletePosition.bind(this)}>Delete</a>
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

export default PositionIndex
