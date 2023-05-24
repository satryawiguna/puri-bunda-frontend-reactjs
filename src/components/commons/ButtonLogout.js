import React from "react";
import {useLogout} from "../../hooks/useAuth";
import {logoutAction} from "../../features/authSlice";
import {setAuthToken, setAuthType} from "../../libs/HttpClient";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const ButtonLogout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {tokens} = useSelector((state) => state.auth)
    const logoutRequest = {
        access_token: tokens.access.token,
        refresh_token: tokens.refresh.token
    }

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
        doLogout(logoutRequest)
    }

    return (
        <button type="button" onClick={handleLogout} className="button is-light">
            Log out
        </button>
    )
}

export default ButtonLogout
