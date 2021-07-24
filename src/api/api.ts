import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ShowList, Show, EpisodeList } from './api.types';

const hypenateQuery = (query: string) =>
  query.replace(/\s/g, '-').toLowerCase();

export const showsApi = createApi({
  reducerPath: 'shows',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.tvmaze.com/' }),
  endpoints: (builder) => ({
    getShows: builder.query<ShowList, string>({
      query: (query) => `search/shows?q=${hypenateQuery(query)}`,
    }),
    getShowById: builder.query<Show, number>({
      query: (query) => `shows/${query}`,
    }),
    getEpisodesById: builder.query<EpisodeList, number>({
      query: (query) => `shows/${query}/episodes`,
    }),
  }),
});

export const {
  useGetEpisodesByIdQuery,
  useGetShowByIdQuery,
  useGetShowsQuery,
} = showsApi;
