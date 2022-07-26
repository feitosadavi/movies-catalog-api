import { Controller } from '@/application/controllers'
import { SaveMovies } from '@/application/usecases'

export class MovieController implements Controller {
  constructor(private readonly saveMovies: SaveMovies) { }

  async handle (req): Promise<{ statusCode: number; body: any }> {
    try {
      await this.saveMovies.execute()
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