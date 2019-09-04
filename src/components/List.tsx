import React from 'react';
import MovieData from '../interfaces/MovieData';
import Movie from './Movie';

const List: React.FC<{ movies: MovieData[] }> = ({ movies }) => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="card-columns">
          { movies.map((movie, index) => {
            return <Movie key={ index } movie={ movie } />
          }) }
        </div>
      </div>
    </div>
  );
}

export default List;
