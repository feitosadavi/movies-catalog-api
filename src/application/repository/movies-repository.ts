import { MovieProps } from '@/domain/entities';


export interface IMoviesRepository {
  saveMany (input: MovieProps[]): Promise<void>
  getMovies (input: IMoviesRepository.GetMoviesInput): Promise<IMoviesRepository.GetMoviesOutput>
  deleteMovies (): Promise<void>
}

export namespace IMoviesRepository {
  export type GetMoviesInput = {
    skip?: number
    limit?: number
  }
  export type GetMoviesOutput = {
    movies: Array<MovieProps & { _id: string }>
    totalCount: number
  }
}