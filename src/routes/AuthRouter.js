import {useSelector} from "react-redux";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import AuthLayout from "../components/layouts/AuthLayout";

const AuthRoute = () => {
    const location = useLocation();

    const {isLoggedIn} = useSelector((state) => state.auth)

    return !isLoggedIn ? (
        <AuthLayout>
            <Outlet/>
        </AuthLayout>
    ) : (
        <Navigate to={{
            pathname: '/admin/dashboard',
            state: {from: location}
        }}/>
    )

}

export default AuthRoute
