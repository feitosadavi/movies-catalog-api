import { Controller } from '@/application/controllers'
import { DeleteMovies } from '@/application/usecases'

export class DeleteMoviesController implements Controller {
  constructor(private readonly deleteMovies: DeleteMovies) { }

  async handle (req): Promise<{ statusCode: number; body: any }> {
    try {
      await this.deleteMovies.execute()
      return {
        statusCode: 204,
        body: {}
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