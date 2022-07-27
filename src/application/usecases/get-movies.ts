import { IMoviesRepository } from '@/application/protocols';

export class GetMovies {
  constructor(
    private readonly moviesRepository: IMoviesRepository
  ) { }

  async execute (input: IMoviesRepository.GetMoviesInput) {
    const movies = await this.moviesRepository.getMovies(input)
    return movies
  }
}