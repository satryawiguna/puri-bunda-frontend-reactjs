import MessageAlert from "../../commons/MessageAlert";
import {Formik} from "formik";
import DatePicker from "react-datepicker";
import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useGetPosition, useUpdatePosition} from "../../../hooks";

const PositionEdit = () => {
    const navigate = useNavigate()
    const {id} = useParams()

    const [showMessageAlert, setShowMessageAlert] = useState(false);

    const {data: dataGetPosition, isLoading: isLoadingGetPosition, refetch: refetchGetPosition} = useGetPosition(id)

    const {
        mutate: doUpdatePosition,
        isError: isErrorCreatePosition,
        error: errorCreatePosition
    } = useUpdatePosition((res) => {
        refetchGetPosition()

        navigate("/admin/position")
    }, (err) => {
        setShowMessageAlert(true)
    })

    const handleCloseMessageAlert = () => {
        setShowMessageAlert(false)
    }

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-full-desktop">
                            <MessageAlert isError={isErrorCreatePosition}
                                          error={errorCreatePosition}
                                          showMessageAlert={showMessageAlert}
                                          handleCloseMessageAlert={handleCloseMessageAlert}/>
                            {
                                !isLoadingGetPosition ?
                                    <Formik
                                        enableReinitialize={true}
                                        initialValues={{
                                            id: dataGetPosition.data.id,
                                            title: dataGetPosition.data.title
                                        }}
                                        onSubmit={(values) => {
                                            values.release_date =
                                                doUpdatePosition(values)
                                        }}
                                    >{
                                        ({
                                             values,
                                             handleChange,
                                             handleBlur,
                                             handleSubmit,
                                             errors
                                         }) => (
                                            <form onSubmit={handleSubmit} className="box">
                                                <div className="field mt-3">
                                                    <label className="label">Title</label>
                                                    <div className="controls">
                                                        <input
                                                            name="title"
                                                            type="text"
                                                            className="input"
                                                            placeholder="Title"
                                                            value={values.title}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="field mt-5">
                                                    <button type="submit" className="button is-danger mr-3"
                                                            onClick={() => {
                                                                navigate("/admin/position")
                                                            }}>
                                                        Cancel
                                                    </button>
                                                    <button type="submit" className="button is-success">
                                                        Update
                                                    </button>
                                                </div>
                                            </form>
                                        )
                                    }
                                    </Formik> : 'Loading...'
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PositionEdit
