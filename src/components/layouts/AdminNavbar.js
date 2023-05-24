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
                            <h2>MOVIE GALLERY</h2>
                        </strong>
                    </Link>
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
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
                        {
                            userInfo.role_id === 1 ?
                                <a href="/admin/movies" className="navbar-item">Movie</a> : ''
                        }

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
