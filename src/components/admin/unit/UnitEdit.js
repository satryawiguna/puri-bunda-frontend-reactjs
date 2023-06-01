import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {useGetUnit, useUpdateUnit} from "../../../hooks";
import {Formik} from "formik";
import MessageAlert from "../../commons/MessageAlert";

const UnitEdit = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    
    const [showMessageAlert, setShowMessageAlert] = useState(false);

    const {data: dataGetUnit, isLoading: isLoadingGetUnit, refetch: refetchGetUnit} = useGetUnit(id)

    const {mutate: doUpdateUnit, isError: isErrorCreateUnit, error: errorCreateUnit} = useUpdateUnit((res) => {
        refetchGetUnit()

        navigate("/admin/unit")
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
                            <MessageAlert isError={isErrorCreateUnit}
                                          error={errorCreateUnit}
                                          showMessageAlert={showMessageAlert}
                                          handleCloseMessageAlert={handleCloseMessageAlert}/>
                            {
                                !isLoadingGetUnit ?
                                    <Formik
                                        enableReinitialize={true}
                                        initialValues={{
                                            id: dataGetUnit.data.id,
                                            title: dataGetUnit.data.title
                                        }}
                                        onSubmit={(values) => {
                                            values.release_date =
                                                doUpdateUnit(values)
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
                                                                navigate("/admin/unit")
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

export default UnitEdit

