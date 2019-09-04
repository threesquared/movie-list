import React from 'react';
import { Link } from 'react-router-dom';
import { truncate } from '../lib/util';
import MovieData from '../interfaces/MovieData';

const Movie: React.FC<{ movie: MovieData }> = ({ movie }) => {
  if (!movie.details) {
    return null;
  }

  return (
    <div className="card box-shadow">
        <a href={`https://imdb.com/title/${movie.id}`} target="_blank" rel="noopener noreferrer">
          <img className="card-img-top" src={"https://image.tmdb.org/t/p/w342" + movie.details.poster_path} alt=""></img>
        </a>
        <div className="card-body">
          <h5 className="card-title">{ movie.details.title }</h5>
          <p className="card-text overflow-hidden ">{ truncate(movie.details.overview) }</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
                { movie.streamable &&
                  <Link to={{ pathname: `stream/${movie.id}`, state: { movie } }}><button type="button" className="btn btn-sm btn-outline-secondary">Stream</button></Link>
                }
                <a href={ `files/${movie.file}` } className="btn btn-sm btn-outline-secondary">Download</a>
            </div>
            <small className="text-muted">{ movie.details.vote_average }</small>
          </div>
      </div>
    </div>
  );
}

export default Movie;
