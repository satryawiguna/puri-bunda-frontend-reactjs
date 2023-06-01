import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import ButtonLogout from "../commons/ButtonLogout";

const CommonNavbar = () => {
    const {isLoggedIn} = useSelector((state) => state.auth)

    return (
        <nav
            className="navbar is-light"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <div className="navbar-brand">
                    <Link className="navbar-item" to={`/`}>
                        <strong>
                            <h2>PURI BUNDA</h2>
                        </strong>
                    </Link>

                    <a
                        href="/"
                        role="button"
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start"></div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            {
                                !isLoggedIn ? (<div className="buttons">
                                    <Link to={"/login"} className="button is-light">
                                        Login
                                    </Link>
                                    <Link to={"/register"} className="button is-light">
                                        Register
                                    </Link>
                                </div>) : (<div className="buttons">
                                    <Link to={"/admin/dashboard"} className="button is-light">
                                        Dashboard
                                    </Link>
                                    <ButtonLogout/>
                                </div>)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default CommonNavbar;
