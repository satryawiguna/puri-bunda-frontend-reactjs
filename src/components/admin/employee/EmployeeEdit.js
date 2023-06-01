import MessageAlert from "../../commons/MessageAlert";
import {Formik} from "formik";
import DatePicker from "react-datepicker";
import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

const EmployeeEdit = () => {
    const navigate = useNavigate()
    const {id} = useParams()

    // const [showMessageAlert, setShowMessageAlert] = useState(false);
    //
    // const {data: movie, isLoading, refetch} = useGetMovie(id)
    //
    // const {mutate: doUpdateMovie, isError: isErrorCreateMovie, error: errorCreateMovie} = useUpdateMovie((res) => {
    //     refetch()
    //
    //     navigate("/admin/movies")
    // }, (err) => {
    //     setShowMessageAlert(true)
    // })
    //
    // const handleCloseMessageAlert = () => {
    //     setShowMessageAlert(false)
    // }

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-full-desktop">
                            {/*<MessageAlert isError={isErrorCreateMovie}*/}
                            {/*              error={errorCreateMovie}*/}
                            {/*              showMessageAlert={showMessageAlert}*/}
                            {/*              handleCloseMessageAlert={handleCloseMessageAlert}/>*/}
                            {/*{*/}
                            {/*    !isLoading ?*/}
                            {/*        <Formik*/}
                            {/*            enableReinitialize={true}*/}
                            {/*            initialValues={{*/}
                            {/*                id: movie.data.id,*/}
                            {/*                title: movie.data.title,*/}
                            {/*                description: movie.data.description,*/}
                            {/*                release_date: new Date(movie.data.release_date),*/}
                            {/*                runtime: movie.data.runtime,*/}
                            {/*                revenue: movie.data.revenue,*/}
                            {/*                poster: movie.data.poster,*/}
                            {/*            }}*/}
                            {/*            onSubmit={(values) => {*/}
                            {/*                values.release_date =*/}
                            {/*                    doUpdateMovie(values)*/}
                            {/*            }}*/}
                            {/*        >{*/}
                            {/*            ({*/}
                            {/*                 values,*/}
                            {/*                 handleChange,*/}
                            {/*                 handleBlur,*/}
                            {/*                 handleSubmit,*/}
                            {/*                 errors*/}
                            {/*             }) => (*/}
                            {/*                <form onSubmit={handleSubmit} className="box">*/}
                            {/*                    <div className="field mt-3">*/}
                            {/*                        <label className="label">Title</label>*/}
                            {/*                        <div className="controls">*/}
                            {/*                            <input*/}
                            {/*                                name="title"*/}
                            {/*                                type="text"*/}
                            {/*                                className="input"*/}
                            {/*                                placeholder="Title"*/}
                            {/*                                value={values.title}*/}
                            {/*                                onChange={handleChange}*/}
                            {/*                                onBlur={handleBlur}*/}
                            {/*                            />*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="field mt-3">*/}
                            {/*                        <label className="label">description</label>*/}
                            {/*                        <div className="controls">*/}
                            {/*                    <textarea*/}
                            {/*                        name="description"*/}
                            {/*                        rows="5"*/}
                            {/*                        className="input"*/}
                            {/*                        style={{"height": "100px"}}*/}
                            {/*                        placeholder="Description"*/}
                            {/*                        onChange={handleChange}*/}
                            {/*                        onBlur={handleBlur}*/}
                            {/*                        value={values.description}*/}
                            {/*                    >{values.description}</textarea>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="field mt-3">*/}
                            {/*                        <label className="label">Release Date</label>*/}
                            {/*                        <div className="controls">*/}
                            {/*                            <DatePicker*/}
                            {/*                                name="email"*/}
                            {/*                                selected={values.release_date}*/}
                            {/*                                className="input"*/}
                            {/*                                placeholderText="Release Date"*/}
                            {/*                            />*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="field mt-3">*/}
                            {/*                        <label className="label">Runtime</label>*/}
                            {/*                        <div className="controls">*/}
                            {/*                            <input*/}
                            {/*                                name="runtime"*/}
                            {/*                                type="text"*/}
                            {/*                                className="input"*/}
                            {/*                                placeholder="Runtime"*/}
                            {/*                                value={values.runtime}*/}
                            {/*                                onChange={handleChange}*/}
                            {/*                                onBlur={handleBlur}*/}
                            {/*                            />*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="field mt-3">*/}
                            {/*                        <label className="label">Revenue</label>*/}
                            {/*                        <div className="controls">*/}
                            {/*                            <input*/}
                            {/*                                name="revenue"*/}
                            {/*                                type="number"*/}
                            {/*                                className="input"*/}
                            {/*                                placeholder="Revenue"*/}
                            {/*                                value={values.revenue}*/}
                            {/*                                onChange={handleChange}*/}
                            {/*                                onBlur={handleBlur}*/}
                            {/*                            />*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="field mt-3">*/}
                            {/*                        <label className="label">Poster</label>*/}
                            {/*                        <div className="controls">*/}
                            {/*                            <input*/}
                            {/*                                name="poster"*/}
                            {/*                                type="text"*/}
                            {/*                                className="input"*/}
                            {/*                                placeholder="Poster"*/}
                            {/*                                value={values.poster}*/}
                            {/*                                onChange={handleChange}*/}
                            {/*                                onBlur={handleBlur}*/}
                            {/*                            />*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="field mt-5">*/}
                            {/*                        <button type="submit" className="button is-danger mr-3"*/}
                            {/*                                onClick={() => {*/}
                            {/*                                    navigate("/admin/movies")*/}
                            {/*                                }}>*/}
                            {/*                            Cancel*/}
                            {/*                        </button>*/}
                            {/*                        <button type="submit" className="button is-success">*/}
                            {/*                            Update*/}
                            {/*                        </button>*/}
                            {/*                    </div>*/}
                            {/*                </form>*/}
                            {/*            )*/}
                            {/*        }*/}
                            {/*        </Formik> : 'Loading...'*/}
                            {/*}*/}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EmployeeEdit
