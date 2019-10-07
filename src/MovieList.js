import React , { useContext} from 'react'
import {MovieContext} from './MovieContainer.js'


const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return(
        <div>
            {
            movies.map(movie => 
                <div>
                    <h4>{movie.name}</h4>
                    <p>{movie.price}</p>
                </div>)
            }
        </div>
    )
}

export default MovieList
