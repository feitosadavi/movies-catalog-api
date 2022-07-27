import { IMoviesRepository } from '@/application/protocols';

export class DeleteMovies {
  constructor(
    private readonly moviesRepository: IMoviesRepository
  ) { }

  async execute (): Promise<void> {
    await this.moviesRepository.deleteMovies()
  }
}