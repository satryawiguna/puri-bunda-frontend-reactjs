import React from "react";
import {useLogout} from "../../hooks/useAuth";
import {logoutAction} from "../../features/authSlice";
import {setAuthToken, setAuthType} from "../../libs/HttpClient";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const ButtonLogout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {mutate: doLogout} = useLogout(
        (res) => {
            dispatch(logoutAction())

            setAuthToken(null)
            setAuthType(null)

            navigate("/login", {replace: true})
        },
        (error) => {
            //do nothing
        }
    )

    const handleLogout = () => {
        doLogout()
    }

    return (
        <button type="button" onClick={handleLogout} className="button is-light">
            Log out
        </button>
    )
}

export default ButtonLogout
