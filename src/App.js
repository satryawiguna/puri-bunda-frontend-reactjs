import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Dashboard from "./components/admin/Dashboard";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import AuthRouter from "./routes/AuthRouter";
import MovieIndex from "./components/admin/movie/MovieIndex";
import MovieCreate from "./components/admin/movie/MovieCreate";
import MovieUpdate from "./components/admin/movie/MovieUpdate";
import MovieDetail from "./components/admin/movie/MovieDetail";
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

const App = () => {
    const navigate = useNavigate()
    const {userInfo} = useSelector((state) => state.auth)

    const adminGuard = (to, from, next, {route}) => {
        if (userInfo.role_id !== 1)
            navigate("/404")

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
                            <GuardedRoute path="/admin/movies" element={<MovieIndex/>} guards={adminGuards}/>
                            <GuardedRoute path="/admin/movie/create" element={<MovieCreate/>} guards={adminGuards}/>
                            <GuardedRoute path="/admin/movie/:id/edit" element={<MovieUpdate/>} guards={adminGuards}/>
                            <GuardedRoute path="/admin/movies/:id" element={<MovieDetail/>} guards={adminGuards}/>
                        </GuardedRoute>
                    </GuardedRoutes>
                </GuardProvider>
            </GuardConfigProvider>
        </>
    );
}

export default App;
