import React , {useState , createContext} from 'react';

export const MovieContext = createContext();

const MovieContainer = props => {

    const [movies, setMovies] = useState([
        {
            id:1,
            name: "Forest Gump",
            price : '120$'
        },
        {
            id:2,
            name: "Shashwank Redemption",
            price : '150$'
        },
        {
            id:1,
            name: "Fury 2018",
            price : '100$'
        }
    ]);
   
    return(
        <MovieContext.Provider value = {[movies,setMovies]}>
           {props.children}
        </MovieContext.Provider>
    );
}


export default MovieContainer