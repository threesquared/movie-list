import { TmdbApi, MovieDetails, TvShowDetails } from 'tmdb-typescript-api';
import MovieData from '../interfaces/MovieData';
import TvShowData from '../interfaces/TvShowData';

export async function getMovieDetails(movies: MovieData[]): Promise<MovieData[]> {
  const api = new TmdbApi(process.env.REACT_APP_TMDB_KEY as string);

  const promises = movies.map(async movie => {
    const details = await new Promise<MovieDetails>(resolve => {
      api.movies.details(movie.id as unknown as number).subscribe(movie => resolve(movie));
    });

    return {
      ...movie,
      details
    };
  })

  return await Promise.all(promises)
}

export async function getTvShowDetails(tv: TvShowData[]): Promise<TvShowData[]> {
  const api = new TmdbApi(process.env.REACT_APP_TMDB_KEY as string);

  const promises = tv.map(async show => {
    const details = await new Promise<TvShowDetails>(resolve => {
      api.tvshows.details(show.id as unknown as number).subscribe(show => resolve(show));
    });

    return {
      ...show,
      details
    };
  })

  return await Promise.all(promises)
}
