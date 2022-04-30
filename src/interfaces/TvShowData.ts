import { TvShowDetails } from 'tmdb-typescript-api';

export default interface TvShowData {
  id: string;
  folder: string;
  episodes: string[],
  details?: TvShowDetails;
}
