import {Link, useParams} from "react-router-dom";
import {useGetMovie} from "../../../hooks";

const MovieDetail = () => {
    const {id} = useParams()
    const {data: movie, isLoading} = useGetMovie(id)

    return (
        <>
            <div className="container">
                <section className="section">
                    <div className="columns is-flex-direction-column">
                        <div className="column p-0 m-0">
                            <Link className="button is-info mb-5" to={"/admin/movies"}>Vew List</Link>
                        </div>
                        {!isLoading ?
                            <div className="card">
                                <div className="card-image">
                                    <img src={movie.data.poster}
                                         alt="Placeholder image"/>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">{movie.data.title}</p>
                                            <p className="subtitle is-6">{movie.data.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : 'Loading...'}
                    </div>


                </section>
            </div>
        </>
    )
}

export default MovieDetail
