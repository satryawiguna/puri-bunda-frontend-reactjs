import React from "react";
import {useNavigate} from "react-router-dom";

const EmployeeIndex = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="container">
                <section className="section">
                    <div className="columns is-flex-direction-column">
                        <div className="column m-0 p-0">
                            <button type="button" className="button is-success is-pulled-right mb-5"
                                    onClick={() => {
                                        navigate("/admin/position/create")
                                    }}>
                                Add Movie
                            </button>
                        </div>

                    </div>
                </section>
            </div>

        </>
    )
}

export default EmployeeIndex
