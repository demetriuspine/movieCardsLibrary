import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import data from './data';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="movie-list">
          <MovieList className="movie-list" movies={ data } />
        </main>
      </>
    );
  }
}

export default App;
