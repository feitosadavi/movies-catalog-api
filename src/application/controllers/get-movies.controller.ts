import { Controller } from '@/application/controllers'
import { GetMovies } from '@/application/usecases'

export class GetMoviesController implements Controller {
  constructor(private readonly getMovies: GetMovies) { }

  async handle ({ skip, limit }: Request): Promise<{ statusCode: number; body: any }> {
    try {
      console.log({ skip, limit })
      const movies = await this.getMovies.execute({ skip, limit })
      return {
        statusCode: 200,
        body: movies
      }
    } catch (error) {
      console.error(error)
      return {
        statusCode: 500,
        body: 'Internal Server Error'
      }
    }
  }
}

type Request = {
  skip: number
  limit: number
}