import MessageAlert from "../../commons/MessageAlert";
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import {Formik} from "formik";
import {useNavigate} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import {
    useCreateEmployee,
    useFetchAllSearchEmployees,
    useFetchAllSearchPageEmployees,
    useFetchAllSearchUnits
} from "../../../hooks";
import CreatableSelect from 'react-select/creatable';

const EmployeeCreate = () => {
    const navigate = useNavigate()

    const [showMessageAlert, setShowMessageAlert] = useState(false);
    const [queryString, setQueryString] = useState({
        search: "",
        orderBy: "id",
        sort: "DESC"
    })

    const {
        mutate: doCreateEmployee,
        isError: isErrorCreateEmployee,
        error: errorCreateEmployee
    } = useCreateEmployee((res) => {
        navigate("/admin/employee")
    }, (err) => {
        setShowMessageAlert(true)
    })

    const {
        data: dataFetchAllSearchPageUnits,
        isLoading: isLoadingFetchAllSearchPageUnits,
        refetch: refetchFetchAllSearchPageUnits
    } = useFetchAllSearchUnits(queryString)

    const handleCloseMessageAlert = () => {
        setShowMessageAlert(false)
    }

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-full-desktop">
                            <MessageAlert isError={isErrorCreateEmployee}
                                          error={errorCreateEmployee}
                                          showMessageAlert={showMessageAlert}
                                          handleCloseMessageAlert={handleCloseMessageAlert}/>
                            <Formik
                                initialValues={{
                                    unit: '',
                                    positions: [],
                                    nick_name: '',
                                    full_name: '',
                                    join_date: new Date(),
                                    username: '',
                                    email: '',
                                    password: '',
                                    password_confirmation: '',
                                }}
                                onSubmit={(values) => {
                                    doCreateEmployee(values)
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
                                            <label className="label">Unit</label>
                                            <div className="controls">
                                                {/*<input*/}
                                                {/*    name="title"*/}
                                                {/*    type="text"*/}
                                                {/*    className="input"*/}
                                                {/*    placeholder="Title"*/}
                                                {/*    value={values.title}*/}
                                                {/*    onChange={handleChange}*/}
                                                {/*    onBlur={handleBlur}*/}
                                                {/*/>*/}
                                            </div>
                                        </div>


                                        <div className="field mt-5">
                                            <button type="submit" className="button is-danger mr-3"
                                                    onClick={() => {
                                                        navigate("/admin/employee")
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

export default EmployeeCreate
