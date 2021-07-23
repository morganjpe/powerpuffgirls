import { show, search, episodes } from './data';
import { rest } from 'msw';

const path = 'https://api.tvmaze.com/';

const handlers = [
  rest.get(`${path}shows/*`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(show))
  ),
  rest.get(`${path}shows/*/episodes`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(episodes))
  ),
  rest.get(`${path}search/*`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(search))
  ),
];

export default handlers;
