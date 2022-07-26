import { IMoviesRepository } from '@/application/repository';
import { MovieProps } from '@/domain/entities';
import MovieModel from './movie.model';

export class MoviesMongoRepository implements IMoviesRepository {
  async saveMany (movies: MovieProps[]): Promise<void> {
    await MovieModel.insertMany(movies)
  }

  async getMovies ({ skip, limit }: IMoviesRepository.GetMoviesInput): Promise<IMoviesRepository.GetMoviesOutput> {
    const movies = await MovieModel.find().skip(skip).limit(limit).lean()
    const totalCount = await MovieModel.count();
    const moviesWithStringId = movies.map(movie => ({ ...movie, _id: String(movie._id) }))
    return { movies: moviesWithStringId, totalCount } // convert ObjectId (_id) to string
  }
}