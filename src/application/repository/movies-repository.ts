import { MovieProps } from '@/domain/entities';

export interface IMoviesRepository {
  saveMany (input: MovieProps[]): Promise<void>
}