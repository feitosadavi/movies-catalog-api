import { IMoviesRepository } from '@/application/repository';

export class DeleteMovies {
  constructor(
    private readonly moviesRepository: IMoviesRepository
  ) { }

  async execute (): Promise<void> {
    await this.moviesRepository.deleteMovies()
  }
}