import React from 'react';
import MovieData from '../interfaces/MovieData';
import TvShowData from '../interfaces/TvShowData';
import Movie from './Movie';
import TvShow from './TvShow';

const List: React.FC<{ items: { type: string; item: MovieData | TvShowData; }[] }> = ({ items }) => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="card-columns">
          { items.map((item, index) => {
            if (item.type === 'movie') {
              return <Movie key={ index } movie={ item.item as MovieData} />;
            } else if (item.type === 'show') {
              return <TvShow key={ index } show={ item.item as TvShowData } />;
            }
          }) }
        </div>
      </div>
    </div>
  );
}

export default List;
