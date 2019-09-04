import { MovieDetails } from 'tmdb-typescript-api';

export default interface MovieData {
  id: string;
  file: string;
  streamable: boolean;
  details?: MovieDetails;
}
