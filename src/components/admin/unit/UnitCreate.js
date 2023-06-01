import MessageAlert from "../../commons/MessageAlert";
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import {Formik} from "formik";
import {useNavigate} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import {useCreateUnit} from "../../../hooks";

const UnitCreate = () => {
    const navigate = useNavigate()

    const [showMessageAlert, setShowMessageAlert] = useState(false);

    const {mutate: doCreateUnit, isError: isErrorCreateUnit, error: errorCreateUnit} = useCreateUnit((res) => {
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
                            <Formik
                                initialValues={{
                                    title: '',
                                }}
                                onSubmit={(values) => {
                                    doCreateUnit(values)
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
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                )
                            }
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UnitCreate
