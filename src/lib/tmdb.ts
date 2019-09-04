import { TmdbApi, MovieDetails } from 'tmdb-typescript-api';
import MovieData from '../interfaces/MovieData';

export default async function getMovieDetails(movies: MovieData[]): Promise<MovieData[]> {
  const api = new TmdbApi(process.env.TMDB_KEY as string);

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
