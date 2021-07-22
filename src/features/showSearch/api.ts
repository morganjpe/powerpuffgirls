import axios from 'axios';
import type { ShowList } from './shows.types';

const PATH = 'https://api.tvmaze.com/search/shows?q=power-puff';

export const searchShows = async (query: string): Promise<ShowList | null> => {
  if (query.length) {
    try {
      const response = await axios.get<ShowList>(PATH, {
        params: {
          q: query.replace(/\s/g, '-').toLowerCase(),
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  return null;
};
