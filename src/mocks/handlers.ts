import { show, search, episodes } from './data';
import { rest } from 'msw';

const path = 'https://api.tvmaze.com/';

const handlers = [
  rest.get(`${path}shows/6771`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(show))
  ),
  rest.get(`${path}shows/49892`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(show))
  ),
  rest.get(`${path}shows/6771/episodes`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(episodes))
  ),
  rest.get(`${path}shows/49892/episodes`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(episodes))
  ),
  rest.get(`${path}search/*`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(search))
  ),
];

export default handlers;
