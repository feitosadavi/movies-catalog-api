import { ProductWithoutId } from '../entities'

export interface LoadGhibliapiMovies {
  loadMovies (): Promise<LoadGhibliapiMovies.Output>
}

export namespace LoadGhibliapiMovies {
  export type Output = ProductWithoutId
}