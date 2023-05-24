import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Formik} from 'formik';
import MessageAlert from "./commons/MessageAlert";
import {useLogin} from "../hooks";
import {loginAction} from "../features/authSlice";
import {setAuthToken, setAuthType} from "../libs/HttpClient";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [showMessageAlert, setShowMessageAlert] = useState(false);

    const {mutate: doLogin, isError: isErrorLogin, error: errorLogin} = useLogin(
        (res) => {
            const loginInfo = {
                userInfo: res.data,
                tokens: res.tokens
            };

            dispatch(loginAction(loginInfo))

            setAuthToken(loginInfo.tokens.access.token)
            setAuthType('admin')

            navigate("/admin/dashboard", {replace: true})
        },
        (error) => {
            setShowMessageAlert(true)
        }
    )

    const handleCloseMessageAlert = () => {
        setShowMessageAlert(false)
    }

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <MessageAlert isError={isErrorLogin}
                                          error={errorLogin}
                                          showMessageAlert={showMessageAlert}
                                          handleCloseMessageAlert={handleCloseMessageAlert}/>
                            <Formik
                                initialValues={{email: '', password: ''}}
                                onSubmit={(values) => {
                                    doLogin(values)
                                }}
                            >
                                {
                                    ({
                                         values,
                                         handleChange,
                                         handleBlur,
                                         handleSubmit,
                                         errors
                                     }) => (
                                        <form onSubmit={handleSubmit} className="box">
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
                                                <button type="submit" className="button is-success is-fullwidth">
                                                    Login
                                                </button>
                                            </div>
                                            <div className="field mt-3">
                                                <small>
                                                    Don't have account? <Link to={"/register"}>Click here</Link>{" "}
                                                    for registration or back to <Link to={"/"}>Homepage</Link>
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

export default Login;
