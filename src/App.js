import React from 'react';
import './App.css';
import MovieContainer from './MovieContainer.js';
import MovieList from './MovieList';
import Nav from './Nav';
import AddMovie from './AddMovie'

function App() {
  return (
    <MovieContainer>
    <div className="App">
        <Nav/>
        <AddMovie/>
        <MovieList/>
    </div>
    </MovieContainer>
  );
}

export default App;
