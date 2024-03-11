import { isObjectIdOrHexString } from 'mongoose';
import { MovieModel } from '../model/movie.model.js';

export const validateCreateMovie = (req, res, next) => {
  const { name, time, year, image, introduce } = req.body;

  //Validate input
  if (!name) throw new Error('name is required');
  if (!time) throw new Error('time is required');
  if (!year) throw new Error('year is required');
  if (!image) throw new Error('image is required');
  if (!introduce) throw new Error('introduce is required');

  next();
};

export const validateUpdateMovie = async (req, res, next) => {
  const { movieId } = req.params;
  const { name, time, year, image, introduce } = req.body;

  //Check Id co hop le
  if (!isObjectIdOrHexString(movieId)) throw new Error('Id is not valid');

  //Check movieId co ton tai
  const current = await MovieModel.findById(movieId);
  if (!current) throw new Error('movieId does not exist');

  //Validate input
  if (!name) throw new Error('name is required');
  if (!time) throw new Error('time is required');
  if (!year) throw new Error('year is required');
  if (!image) throw new Error('image is required');
  if (!introduce) throw new Error('introduce is required');

  next();
};

export const validateDeleteMovie = async (req, res, next) => {
  const { movieId } = req.params;

  //Check Id co hop le
  if (!isObjectIdOrHexString(movieId)) throw new Error('Id is not valid');

  //Check movieId co ton tai
  const current = await MovieModel.findById(movieId);
  if (!current) throw new Error('movieId does not exist');

  next();
};
