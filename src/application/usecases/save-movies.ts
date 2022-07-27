import { GhibliapiGateway, IMoviesRepository } from '@/application/protocols';
import { Movie, MovieProps } from '@/domain/entities';

export class SaveMovies {
  constructor(
    private readonly ghibliapiGateway: GhibliapiGateway,
    private readonly moviesRepository: IMoviesRepository
  ) { }

  async execute () {
    const ghibliapiMovies = await this.ghibliapiGateway.loadMovies()
    const movies: MovieProps[] = []
    for (const ghibliapiMovie of ghibliapiMovies) {
      const _movie = Movie.create(ghibliapiMovie)
      movies.push(_movie.props)
    }
    await this.moviesRepository.saveMany(movies)
  }
}