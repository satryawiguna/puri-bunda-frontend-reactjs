import { Request, Response } from 'express';
import httpStatus from 'http-status';
import MovieService from '../services/MovieService';
import { logger } from '../config/logger';
import { ApiServiceResponse, DataTableResponse } from '../@types/apiServiceResponse';
import { IUser } from '../models/interfaces/IUser';

export default class MovieController {
     private movieService: MovieService;

     constructor() {
          this.movieService = new MovieService();
     }

     fetchMovies = async (req: Request, res: Response) => {
          try {
               const movies: ApiServiceResponse | DataTableResponse =
                    await this.movieService.getMovies(req.body);

               res.send(movies);
          } catch (e) {
               logger.error(e);
               res.status(httpStatus.BAD_GATEWAY).send(e);
          }
     };

     createMovie = async (req: Request, res: Response) => {
          try {
               const movie: ApiServiceResponse = await this.movieService.createMovie(
                    req.body,
                    req.userInfo
               );

               const { status, message, data } = movie.response;

               res.status(movie.statusCode).send({ status, message, data });
          } catch (e) {
               logger.error(e);
               res.status(httpStatus.BAD_GATEWAY).send(e);
          }
     };

     updateMovie = async (req: Request, res: Response) => {
          try {
               const responseData = await this.movieService.updateMovie(
                    req.body,
                    parseInt(req.params.id)
               );
               res.status(responseData.statusCode).send(responseData.response);
          } catch (e) {
               logger.error(e);
               res.status(httpStatus.BAD_GATEWAY).send(e);
          }
     };

     deleteMovie = async (req: Request, res: Response) => {
          try {
               const responseData = await this.movieService.deleteMovie(
                    parseInt(req.params.id),
                    req.userInfo
               );

               res.status(responseData.statusCode).send(responseData.response);
          } catch (e) {
               logger.error(e);
               res.status(httpStatus.BAD_GATEWAY).send(e);
          }
     };

     showMovie = async (req: Request, res: Response) => {
          try {
               const responseData = await this.movieService.getMovieById(
                    parseInt(req.params.id),
                    req.userInfo
               );

               res.status(responseData.statusCode).send(responseData.response);
          } catch (e) {
               logger.error(e);
               res.status(httpStatus.BAD_GATEWAY).send(e);
          }
     };
}
