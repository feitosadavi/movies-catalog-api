/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { MovieController } from '@/application/controllers/movie.controller'
import { SaveMovies } from '@/application/usecases'
import { AxiosHttpClient, Ghibliapi } from '@/infra/gateways'
import { MoviesMongoRepository } from '@/infra/repos/mongo'

const makeMovieController = () => {
  const axiosHttpClient = new AxiosHttpClient()
  const ghibliapi = new Ghibliapi(axiosHttpClient)

  const moviesRepository = new MoviesMongoRepository()
  const saveMovies = new SaveMovies(ghibliapi, moviesRepository)
  return new MovieController(saveMovies)
}

export default (router: Router): void => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.get('/save-movies', (req, res) => {
    makeMovieController().handle(req)
  })
}
