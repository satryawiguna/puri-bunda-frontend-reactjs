import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useRegister} from "../hooks/useAuth";
import MessageAlert from "./commons/MessageAlert";
import {Formik} from "formik";

const Register = () => {
    const navigate = useNavigate();

    const [showMessageAlert, setShowMessageAlert] = useState(false);

    const {mutate: doRegister, isError: isErrorRegister, error: errorRegister} = useRegister((res) => {
        navigate("/login", {replace: true})
    }, (error) => {
        setShowMessageAlert(true)
    })

    const handleCloseMessageAlert = () => {
        setShowMessageAlert(false)
    }

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <MessageAlert isError={isErrorRegister}
                                          error={errorRegister}
                                          showMessageAlert={showMessageAlert}
                                          handleCloseMessageAlert={handleCloseMessageAlert}/>
                            <Formik
                                initialValues={{
                                    nick_name: '',
                                    full_name: '',
                                    email: '',
                                    username: '',
                                    password: '',
                                    password_confirmation: ''
                                }}
                                onSubmit={(values) => {
                                    doRegister(values)
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
                                            <label className="label">Nick Name</label>
                                            <div className="controls">
                                                <input
                                                    name="nick_name"
                                                    type="text"
                                                    className="input"
                                                    placeholder="Nick Name"
                                                    value={values.nick_name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </div>
                                        </div>
                                        <div className="field mt-3">
                                            <label className="label">Full Name</label>
                                            <div className="controls">
                                                <input
                                                    name="full_name"
                                                    type="text"
                                                    className="input"
                                                    placeholder="Full Name"
                                                    value={values.full_name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </div>
                                        </div>
                                        <div className="field mt-3">
                                            <label className="label">Username</label>
                                            <div className="controls">
                                                <input
                                                    name="username"
                                                    type="text"
                                                    className="input"
                                                    placeholder="Username"
                                                    value={values.username}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </div>
                                        </div>
                                        <div className="field mt-3">
                                            <label className="label">Email</label>
                                            <div className="controls">
                                                <input
                                                    name="email"
                                                    type="text"
                                                    className="input"
                                                    placeholder="Email Address"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </div>
                                        </div>
                                        <div className="field mt-3">
                                            <label className="label">Password</label>
                                            <div className="controls">
                                                <input
                                                    name="password"
                                                    type="password"
                                                    className="input"
                                                    placeholder="Password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </div>
                                        </div>
                                        <div className="field mt-3">
                                            <label className="label">Password Confirmation</label>
                                            <div className="controls">
                                                <input
                                                    name="password_confirmation"
                                                    type="password"
                                                    className="input"
                                                    placeholder="Password Confirmation"
                                                    value={values.password_confirmation}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                            </div>
                                        </div>
                                        <div className="field mt-3">
                                            <button type="submit" className="button is-success is-fullwidth">
                                                Register
                                            </button>
                                        </div>
                                        <div className="field mt-3">
                                            <small>
                                                Back to login? <Link to={"/login"}>Click here</Link>
                                            </small>
                                        </div>
                                    </form>
                                )
                            }
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
