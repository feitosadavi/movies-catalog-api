import { GhibliapiGateway } from '@/application/gateways';
import { MovieProps, ProductWithoutId } from '@/domain/entities';
import { HttpGetClient } from './protocols';

export type GhibliapiMovie = Omit<ProductWithoutId, 'banner'> & { movie_banner: string }

export class Ghibliapi implements GhibliapiGateway {
  constructor(private readonly httpClient: HttpGetClient) { }

  async loadMovies (): Promise<MovieProps[]> {
    const ghibliapiMovies = await this.httpClient.get<GhibliapiMovie[]>({ url: 'https://ghibliapi.herokuapp.com/films' })
    const movies = ghibliapiMovies.map(apiMovie => ({ ...apiMovie, banner: apiMovie.movie_banner }))
    return movies
  }
}