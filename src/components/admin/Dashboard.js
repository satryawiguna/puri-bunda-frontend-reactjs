import {useSelector} from "react-redux";
import {useFetchMyFavoriteMovies} from "../../hooks";
import {Link} from "react-router-dom";
import {useEffect} from "react";

const Dashboard = () => {
    const {data: user, isLoading, refetch} = useFetchMyFavoriteMovies()

    const {userInfo} = useSelector((state) => state.auth)

    useEffect(() => {
        refetch()
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="mb-5">
                Welcome back <span className="has-text-weight-bold">{userInfo.email}</span>
            </h1>
            <h2 className="mb-5 has-text-weight-bold">Favorite Movie</h2>
            <div className="columns is-multiline is-flex-direction-row">
                {!isLoading ?
                    user.response.data.movies.length > 0 ?
                        user.response.data.movies.map((movie, index) =>
                            <div key={index} className="column  is-one-third">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={movie.poster}
                                             alt="Placeholder image"/>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <p className="title is-4"><Link
                                                    to={`/admin/movies/${movie.id}`}>{movie.title}</Link></p>
                                                <p className="subtitle is-6">{movie.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : <div className="column">You haven't have movie favorite</div>
                    : <div className="column">Loading...</div>}
            </div>
        </div>
    );
}

export default Dashboard
