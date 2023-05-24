import {Outlet} from "react-router-dom";
import CommonLayout from "../components/layouts/CommonLayout";

const PublicRoute = () => {
    return (
        <CommonLayout>
            <Outlet/>
        </CommonLayout>
    )

}

export default PublicRoute
