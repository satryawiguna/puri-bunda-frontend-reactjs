import models from '../models';
import IMovieDao from './contracts/IMovieDao';
import SuperDao from './SuperDao';
import { logger } from '../config/logger';

const Movie = models.movie;

export default class MovieDao extends SuperDao implements IMovieDao {
     constructor() {
          super(Movie);
     }

     findOneByWhereInclude = (where: object, include: Array<object>): Promise<any> =>
          Movie.findOne({
               where,
          })
               .then((result) => result)
               .catch((e) => {
                    logger.error(e);
                    console.log(e);
               });
}
