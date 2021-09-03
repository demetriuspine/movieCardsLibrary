import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import data from './data';

function App() {
  return (
    <>
      <Header />
      <main className="movie-list">
        <MovieList className="movie-list" movies={ data } />
      </main>
    </>
  );
}

export default App;
