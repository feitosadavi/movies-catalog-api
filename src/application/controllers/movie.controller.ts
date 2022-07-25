import { Controller } from '@/application/controllers'
import { SaveMovies } from '@/application/usecases'

export class MovieController implements Controller {
  constructor(private readonly saveMovies: SaveMovies) { }

  async handle (req): Promise<{ statusCode: number; body: any }> {
    try {
      console.log('bora salvar')
      await this.saveMovies.execute()
    } catch (error) {
      console.error(error)
      return {
        statusCode: 500,
        body: 'Internal Server Error'
      }
    }
  }
}