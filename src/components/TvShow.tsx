import React from 'react';
import { truncate } from '../lib/util';
import TvShowData from '../interfaces/TvShowData';

const TvShow: React.FC<{ show: TvShowData }> = ({ show }) => {
  if (!show.details) {
    return null;
  }

  return (
    <div className="card box-shadow">
        <a href={ show.details.homepage } target="_blank" rel="noopener noreferrer">
          <img className="card-img-top" src={"https://image.tmdb.org/t/p/w342" + show.details.poster_path} alt=""></img>
        </a>
        <div className="card-body">
          <h5 className="card-title">{ show.details.name }</h5>
          <p className="card-text overflow-hidden ">{ truncate(show.details.overview) }</p>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-sm btn-outline-secondary dropdown-toggle"  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Download
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              { show.episodes.map((episode, index) => (
                <a className="dropdown-item" href={ `files/${show.folder}/${episode}` }>Episode {index + 1}</a>
              )) }
            </div>
            <small className="text-muted">{ show.details.vote_average }</small>
          </div>
      </div>
    </div>
  );
}

export default TvShow;
