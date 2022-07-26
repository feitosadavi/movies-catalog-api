import { MovieProps } from '@/domain/entities';


export interface IMoviesRepository {
  saveMany (input: MovieProps[]): Promise<void>
  getMovies (input: IMoviesRepository.GetMoviesInput): Promise<IMoviesRepository.GetMoviesOutput[]>
}

export namespace IMoviesRepository {
  export type GetMoviesInput = {
    skip: number
    limit: number
  }
  export type GetMoviesOutput = MovieProps & { _id: string }
}