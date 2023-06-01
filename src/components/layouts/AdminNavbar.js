import React from "react";
import {Link} from "react-router-dom";
import ButtonLogout from "../commons/ButtonLogout";
import {useSelector} from "react-redux";

const AdminNavbar = () => {
    const {userInfo} = useSelector((state) => state.auth)

    return (
        <>
            <nav
                className="navbar is-light"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <Link className="navbar-item" to={`/`}>
                        <strong>
                            <h2>PURI BUNDA</h2>
                        </strong>
                    </Link>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a href="/admin/dashboard" className="navbar-item">
                            Dashboard
                        </a>
                        <a href="/admin/unit" className="navbar-item">
                            Unit
                        </a>
                        <a href="/admin/position" className="navbar-item">
                            Position
                        </a>
                        <a href="/admin/employee" className="navbar-item">
                            Employee
                        </a>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <ButtonLogout/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default AdminNavbar;
