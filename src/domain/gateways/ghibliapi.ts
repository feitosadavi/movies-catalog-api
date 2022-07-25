export interface LoadGhibliapiMovies {
  loadMovies (): Promise<LoadGhibliapiMovies.Output>
}

export namespace LoadGhibliapiMovies {
  export type Output = {
    title: string
    movie_banner: string
    description: string
    director: string
    producer: string
  }
}