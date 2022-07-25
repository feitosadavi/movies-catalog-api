import { LoadGhibliapiMovies } from '@/domain/gateways';
import { HttpGetClient } from './protocols';

export class Ghibliapi implements LoadGhibliapiMovies {
  constructor(private readonly httpClient: HttpGetClient) { }

  async loadMovies (): Promise<LoadGhibliapiMovies.Output> {
    const data = await this.httpClient.get({ url: 'https://ghibliapi.herokuapp.com/films' })
    return data
  }
}