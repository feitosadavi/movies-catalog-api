import { ProductWithoutId } from '@/domain/entities';
import { LoadGhibliapiMovies } from '@/domain/gateways';
import { HttpGetClient } from './protocols';

export type GhibliapiMovie = Omit<ProductWithoutId, 'banner'> & { movie_banner: string }

export class Ghibliapi implements LoadGhibliapiMovies {
  constructor(private readonly httpClient: HttpGetClient) { }

  async loadMovies (): Promise<LoadGhibliapiMovies.Output> {
    const {
      title,
      description,
      movie_banner,
      producer,
      director
    } = await this.httpClient.get<GhibliapiMovie>({ url: 'https://ghibliapi.herokuapp.com/films' })
    return {
      title,
      description,
      banner: movie_banner,
      producer,
      director
    }
  }
}