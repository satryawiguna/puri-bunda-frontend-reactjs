import {useDeleteMovie, useFavoriteMovie, useFetchAllMovies, useFetchMyFavoriteMovies} from "../../hooks";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const MovieList = () => {
    let filter = {
        limit: 10,
        offset: 0,
        page: 1
    }

    const {data: user, isLoading: isLoadingMyFavoriteMovies, refetch} = useFetchMyFavoriteMovies()

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const {mutate: doFetchAllMovies, isLoading} = useFetchAllMovies((res) => {
        setMovies(res.data)
    }, (err) => {
        //Do nothing
    })

    const {mutate: doDeleteMovie} = useDeleteMovie((res) => {
        doFetchAllMovies(filter)
    }, (err) => {
        //Do nothing
    })

    const {mutate: doFavoriteMovie} = useFavoriteMovie((res) => {
        refetch()
    }, (err) => {
        //Do nothing
    })

    useEffect(() => {
        doFetchAllMovies(filter)
    }, [search])

    const handleDeleteMovie = (data) => {
        let id = data.currentTarget.getAttribute('data-id');
        doDeleteMovie(id)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)

        if (e.target.value.length > 0) {
            filter = {...filter, search: search}
        } else {
            delete filter.search
        }

        doFetchAllMovies(filter)
    }

    const handleFavoriteMovie = (data) => {
        let id = data.currentTarget.getAttribute('data-id');
        doFavoriteMovie(id)
    }

    return (
        <>
            <div className="columns is-flex-direction-row">
                <div className="column is-one-third">
                    <input
                        name="search"
                        type="text"
                        className="input"
                        placeholder="Search"
                        value={search}
                        onKeyUp={handleSearch}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="columns is-multiline is-flex-direction-row">
                {!isLoading && !isLoadingMyFavoriteMovies ?
                    movies.length > 0 ?
                        movies.map((movie, index) =>
                            <div key={index} className="column is-one-third">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={movie.poster}
                                             alt="Placeholder image"/>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <p className="title is-4"><Link
                                                    to={`${movie.id}`}>{movie.title}</Link></p>
                                                <p className="subtitle is-6">{movie.description}</p>
                                                <div className="columns is-flex-direction-row m-0 p-0">
                                                    <Link className="mr-3"
                                                          to={`/admin/movie/${movie.id}/edit`}>Edit</Link>
                                                    <Link data-id={movie.id}
                                                          onClick={handleDeleteMovie.bind(this)}>Delete</Link>

                                                    <div className="column m-0 p-0">
                                                        {
                                                            user.response.data.movies.find(o => o.id === movie.id) ?
                                                                <Link data-id={movie.id} className="is-pulled-right"
                                                                      onClick={handleFavoriteMovie.bind(this)}>Unlike</Link> :
                                                                <Link data-id={movie.id} className="is-pulled-right"
                                                                      onClick={handleFavoriteMovie.bind(this)}>Like</Link>
                                                        }
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : <div className="column">No movies</div>
                    : <div className="column">Loading...</div>}
            </div>
        </>

    )


}

export default MovieList
