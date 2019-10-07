import React, {useContext} from 'react';
import {MovieContext} from './MovieContainer.js';

function Nav() {

    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div>
            <h3>Movies : {movies.length} </h3>
        </div>
    )
}

export default Nav
