import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Genre } from 'tmdb-typescript-api';
import List from './components/List';
import MovieData from './interfaces/MovieData';
import TvShowData from './interfaces/TvShowData';
import { getMovieDetails, getTvShowDetails } from './lib/tmdb';
import { sortRand } from './lib/util';
import moviesData from './movies.json';
import tvData from './tv.json';

const App: React.FC = () => {
  const [items, setItems] = useState<{ type: string; item: MovieData | TvShowData; }[]>([])
  const [genres, setGenres] = useState<Genre[]>([])

  useEffect(() => {
    async function fetchItems() {
      const decoratedMoviesData = await getMovieDetails(sortRand<MovieData>(moviesData))
      const decoratedTvShowData = await getTvShowDetails(sortRand<TvShowData>(tvData))

      let genres: Genre[] = [];

      const movieItems: { type: string; item: MovieData | TvShowData; }[] = decoratedMoviesData.map((movie: MovieData) => {
        if (movie.details) {
          genres = [...genres, ...movie.details.genres];
        }

        return {
          type: 'movie',
          item: movie
        }
      });

      const tvShowItems: { type: string; item: MovieData | TvShowData; }[] = decoratedTvShowData.map((show: TvShowData) => {
        if (show.details) {
          genres = [...genres, ...show.details.genres];
        }
        return {
          type: 'show',
          item: show
        }
      });

      const genreIds = genres.map(genre => genre.id)
      const filteredGenres = genres.filter(({id}, index) => id !== 99 && !genreIds.includes(id, index + 1))

      setGenres(filteredGenres)
      setItems(sortRand(movieItems.concat(tvShowItems)));
    };

    fetchItems();
  }, []);

  return (
    <div>
    <main role="main">
      <Router>
        <Route exact path="/" render={props => <List { ...props } items={ items } />}/>
      </Router>
    </main>
    <footer className="text-muted">
      <div className="container">
        <p>Total { items.length }</p>
      </div>
    </footer>
    </div>
  );
}

export default App;
