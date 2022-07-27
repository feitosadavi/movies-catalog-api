import { GhibliapiGateway } from '@/application/protocols';
import { MovieProps } from '@/domain/entities';
import { HttpGetClient } from './protocols';

export type GhibliapiMovie = Omit<MovieProps, 'banner'> & { movie_banner: string }

export class Ghibliapi implements GhibliapiGateway {
  constructor(private readonly httpClient: HttpGetClient) { }

  mapMovie (ghibliapiMovies: GhibliapiMovie[]) {
    return ghibliapiMovies.map(({ movie_banner, ...apiMovie }) => ({ ...apiMovie, banner: movie_banner }))
  }

  async loadMovies (): Promise<MovieProps[]> {
    const movies = []
    while (movies.length < 50) {
      const ghibliapiMovies = await this.httpClient.get<GhibliapiMovie[]>({ url: 'https://ghibliapi.herokuapp.com/films' })
      const mappedGhibliapiMovies = this.mapMovie(ghibliapiMovies)
      if (mappedGhibliapiMovies.length + movies.length > 50) {
        const firstSixMovies = mappedGhibliapiMovies.slice(0, 6)
        movies.push(...firstSixMovies)
      } else {
        movies.push(...mappedGhibliapiMovies)
      }
    }
    return movies
  }
}