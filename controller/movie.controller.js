import express from 'express';
import { asyncCatch } from '../utils/trycatch.js';
import {
  createMovie,
  deleteMovieId,
  getMovies,
  getMoviesSorted,
  getMoviesbyName,
  updateMovieId,
} from '../service/movie.service.js';
import { authen } from '../utils/authen.js';

const movieController = express.Router();

//movieController.get('/', asyncCatch(authen), asyncCatch(getMovies));
movieController.get('/', asyncCatch(getMovies));
movieController.get('/name/:text', asyncCatch(getMoviesbyName));
movieController.get('/sorted', asyncCatch(getMoviesSorted));
movieController.post('/', asyncCatch(createMovie));
movieController.put('/:movieId', asyncCatch(updateMovieId));
movieController.delete('/:movieId', asyncCatch(deleteMovieId));

export { movieController };
