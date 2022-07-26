/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { MovieController } from '@/application/controllers/movie.controller'
import { DeleteMovies, GetMovies, SaveMovies } from '@/application/usecases'
import { AxiosHttpClient, Ghibliapi } from '@/infra/gateways'
import { MoviesMongoRepository } from '@/infra/repos/mongo'
import { GetMoviesController } from '@/application/controllers/get-movies.controller'
import { adaptRoute } from '../adapters'
import { DeleteMoviesController } from '@/application/controllers/delete-movies.controller'

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

const makeDeleteMoviesController = () => {
  const moviesRepository = new MoviesMongoRepository()
  const deleteMovies = new DeleteMovies(moviesRepository)
  return new DeleteMoviesController(deleteMovies)
}

export default (router: Router): void => {
  router.post('/movies', adaptRoute(makeMovieController()))
  router.get('/movies/:skip?/:limit?', adaptRoute(makeGetMoviesController()))
  router.delete('/movies/delete', adaptRoute(makeDeleteMoviesController()))
}
