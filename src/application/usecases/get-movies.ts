import { IMoviesRepository } from '@/application/repository';

export class GetMovies {
  constructor(
    private readonly moviesRepository: IMoviesRepository
  ) { }

  async execute (input: IMoviesRepository.GetMoviesInput) {
    const movies = await this.moviesRepository.getMovies(input)
    return movies
  }
}