import React,{useState,useContext} from 'react'
import {MovieContext} from './MovieContainer.js'

function AddMovie() {
    const[name, setName] = useState()
    const[price, setPrice] = useState()
    const [movies, setMovies] = useContext(MovieContext)

    const getName = () =>{
        setMovies(prevMovies => [...prevMovies , {name : name , price: price+'$' }]);
        setName('');
        setPrice('')
    }
    return (
        <div>
           Movie Name: <input type= "text" value={name} onChange = {(e) => setName(e.target.value)} />
           <br/>
           Movie Price:<input type= "text" value ={price} onChange = {(e) => setPrice(e.target.value)} />
           <br/>
            <input type="button" value="Save" onClick={getName}/>
        </div>
    )
}

export default AddMovie
