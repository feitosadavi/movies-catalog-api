import { IMoviesRepository } from '@/application/repository';
import { MovieProps } from '@/domain/entities';
import MovieModel from './movie.model';

export class MoviesMongoRepository implements IMoviesRepository {
  async saveMany (movies: MovieProps[]): Promise<void> {
    await MovieModel.insertMany(movies)
  }
}