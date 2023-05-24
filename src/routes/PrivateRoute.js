import {useSelector} from "react-redux";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import AdminLayout from "../components/layouts/AdminLayout";

const PrivateRoute = () => {
    const location = useLocation();

    const {isLoggedIn} = useSelector((state) => state.auth)
    
    return isLoggedIn ? (
        <AdminLayout>
            <Outlet/>
        </AdminLayout>
    ) : (
        <Navigate to={{
            pathname: '/login',
            state: {from: location}
        }}/>
    )

}

export default PrivateRoute
