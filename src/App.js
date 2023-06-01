import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Dashboard from "./components/admin/Dashboard";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import AuthRouter from "./routes/AuthRouter";
import PositionIndex from "./components/admin/position/PositionIndex";
import PositionCreate from "./components/admin/position/PositionCreate";
import PositionEdit from "./components/admin/position/PositionEdit";
import PositionView from "./components/admin/position/PositionView";
import FourOFour from "./components/404";
import {useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet";
import {
    GuardConfigProvider,
    GuardedRoute,
    GuardedRoutes,
    GuardProvider
} from "react-router-guarded-routes";
import {useSelector} from "react-redux";
import UnitIndex from "./components/admin/unit/UnitIndex";
import UnitCreate from "./components/admin/unit/UnitCreate";
import UnitEdit from "./components/admin/unit/UnitEdit";
import UnitView from "./components/admin/unit/UnitView";

const App = () => {
    const navigate = useNavigate()
    const {userInfo} = useSelector((state) => state.auth)

    const adminGuard = (to, from, next, {route}) => {
        next()
    }

    const adminGuards = [adminGuard]

    return (
        <>
            <Helmet>
                <title>Movie Gallery</title>
                <meta name="title" content="Movie Gallery"/>
                <meta name="description" content="Movie Gallery"/>
                <meta name="og:title" content="Movie Gallery"/>
                <meta name="og:description" content="Movie Gallery"/>
            </Helmet>
            <GuardConfigProvider>
                <GuardProvider fallback={<div>loading...</div>}>
                    <GuardedRoutes>
                        <GuardedRoute element={<AuthRouter/>}>
                            <GuardedRoute path="/login" element={<Login/>}/>
                            <GuardedRoute path="/register" element={<Register/>}/>
                        </GuardedRoute>
                        <GuardedRoute element={<PublicRoute/>}>
                            <GuardedRoute exact path="/" element={<Home/>}/>
                            <GuardedRoute exact path="/404" element={<FourOFour/>}/>
                            <GuardedRoute path="*" element={<FourOFour/>}/>
                        </GuardedRoute>
                        <GuardedRoute element={<PrivateRoute/>}>
                            <GuardedRoute path="/admin/dashboard" element={<Dashboard/>}/>

                            <GuardedRoute path="/admin/unit" element={<UnitIndex/>} guards={adminGuards}/>
                            <GuardedRoute path="/admin/unit/create" element={<UnitCreate/>} guards={adminGuards}/>
                            <GuardedRoute path="/admin/unit/:id/edit" element={<UnitEdit/>} guards={adminGuards}/>
                            <GuardedRoute path="/admin/unit/:id" element={<UnitView/>} guards={adminGuards}/>

                            <GuardedRoute path="/admin/position" element={<PositionIndex/>} guards={adminGuards}/>
                            <GuardedRoute path="/admin/position/create" element={<PositionCreate/>}
                                          guards={adminGuards}/>
                            <GuardedRoute path="/admin/position/:id/edit" element={<PositionEdit/>}
                                          guards={adminGuards}/>
                            <GuardedRoute path="/admin/position/:id" element={<PositionView/>} guards={adminGuards}/>
                        </GuardedRoute>
                    </GuardedRoutes>
                </GuardProvider>
            </GuardConfigProvider>
        </>
    );
}

export default App;
