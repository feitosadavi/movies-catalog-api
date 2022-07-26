/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { MovieController } from '@/application/controllers/movie.controller'
import { GetMovies, SaveMovies } from '@/application/usecases'
import { AxiosHttpClient, Ghibliapi } from '@/infra/gateways'
import { MoviesMongoRepository } from '@/infra/repos/mongo'
import { GetMoviesController } from '@/application/controllers/get-movies.controller'
import { adaptRoute } from '../adapters'

const makeMovieController = () => {
  const axiosHttpClient = new AxiosHttpClient()
  const ghibliapi = new Ghibliapi(axiosHttpClient)

  const moviesRepository = new MoviesMongoRepository()
  const saveMovies = new SaveMovies(ghibliapi, moviesRepository)
  return new MovieController(saveMovies)
}

const makeGetMoviesController = () => {
  const moviesRepository = new MoviesMongoRepository()
  const getMovies = new GetMovies(moviesRepository)
  return new GetMoviesController(getMovies)
}

export default (router: Router): void => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.get('/save-movies', (req, res) => {
    makeMovieController().handle(req)
  })

  router.get('/get-movies/:skip?/:limit?', adaptRoute(makeGetMoviesController()))
}
