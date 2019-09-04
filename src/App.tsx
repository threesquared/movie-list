import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import List from './components/List';
import Player from './components/Player';
import MovieData from './interfaces/MovieData';
import getMovieDetails from './lib/tmdb';
import { sortRand } from './lib/util';
import moviesData from './movies.json';

const App: React.FC = () => {
  const [movies, setMovies] = useState<MovieData[]>([])

  useEffect(() => {
    async function fetchMovies() {
      const decoratedMoviesData = await getMovieDetails(sortRand(moviesData))

      setMovies(decoratedMoviesData);
    };

    fetchMovies();
  }, []);

  return (
    <main role="main">
      <Router>
        <Route exact path="/" render={props => <List { ...props } movies={ movies } />}/>
        <Route path="/stream/:id" component={ Player } />
      </Router>
    </main>
  );
}

export default App;
