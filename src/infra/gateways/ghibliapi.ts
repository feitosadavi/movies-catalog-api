import { GhibliapiGateway } from '@/application/protocols';
import { MovieProps } from '@/domain/entities';
import { HttpGetClient } from './protocols';

export type GhibliapiMovie = Omit<MovieProps, 'banner'> & { movie_banner: string }

export class Ghibliapi implements GhibliapiGateway {
  constructor(private readonly httpClient: HttpGetClient) { }

  async loadMovies (): Promise<MovieProps[]> {
    const movies = []
    while (movies.length < 50) {
      const ghibliapiMovies = (await this.httpClient.get<GhibliapiMovie[]>({ url: 'https://ghibliapi.herokuapp.com/films' }))
        .map(({ movie_banner, ...apiMovie }) => ({ ...apiMovie, banner: movie_banner }))

      if (ghibliapiMovies.length + movies.length > 50) {
        const firstSixMovies = ghibliapiMovies.slice(0, 6)
        movies.push(...firstSixMovies)
      } else {
        movies.push(...ghibliapiMovies)
      }
    }
    return movies
  }
}