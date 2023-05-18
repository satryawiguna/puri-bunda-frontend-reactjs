import { IMovie } from '../../models/interfaces/IMovie';

export default interface IMovieDao {
     findOneByWhereInclude: (where: object, include: Array<object>) => Promise<IMovie>;
}
