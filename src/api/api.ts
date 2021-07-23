import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ShowList, Show, EpisodeList } from './api.types';

const hypenateQuery = (query: string) =>
  query.replace(/\s/g, '-').toLowerCase();

export const showsApi = createApi({
  reducerPath: 'shows',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.tvmaze.com/shows/' }),
  endpoints: (builder) => ({
    getShows: builder.query<ShowList, string>({
      query: (query) => `?q=${hypenateQuery(query)}`,
    }),
    getShowById: builder.query<Show, string>({
      query: (query) => query,
    }),
    getEpisodesById: builder.query<EpisodeList, string>({
      query: (query) => `${query}/episodes`,
    }),
  }),
});

export const {
  useGetEpisodesByIdQuery,
  useGetShowByIdQuery,
  useGetShowsQuery,
} = showsApi;
