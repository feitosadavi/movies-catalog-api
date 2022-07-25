import { MovieProps } from '@/domain/entities'

export interface GhibliapiGateway {
  loadMovies (): Promise<MovieProps[]>
}