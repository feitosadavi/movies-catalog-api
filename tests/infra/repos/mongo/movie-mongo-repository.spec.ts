import { makeFakeMoviesWithOutId } from '@tests/domain/fakes'
import { MoviesMongoRepository } from '@/infra/repos/mongo'
import MovieModel from '@/infra/repos/mongo/movie.model'
import mongoose from 'mongoose'
import DbHandler from '@tests/db-handler'

describe('MovieMongoRepository', () => {
  let sut: MoviesMongoRepository

  beforeAll(() => {
    mongoose.connect('mongodb://waproject:challenge@localhost:27017')
  })
  beforeEach(async () => {
    sut = new MoviesMongoRepository
    await DbHandler.connect()
    await MovieModel.deleteMany()
  })

  afterEach(async () => await DbHandler.clearDatabase());
  afterAll(async () => await DbHandler.closeDatabase());

  describe('SaveMany', () => {
    it('should save many movies into db', async () => {
      await sut.saveMany(makeFakeMoviesWithOutId())
      const dbMovies = await MovieModel.find().lean()

      expect(dbMovies.length).toBe(2)
      expect(dbMovies[0].title).toBe('any_title')
    })
  })

  describe('GetMovies', () => {
    it('should get all movies from db', async () => {
      await MovieModel.insertMany(makeFakeMoviesWithOutId())
      const movies = await sut.getMovies({})

      expect(movies.totalCount).toBe(2)
      expect(movies.movies.length).toBe(2)
      expect(movies.movies[0].title).toBe('any_title')
    })

    it('should get all movies with skip and limit options', async () => {
      await MovieModel.insertMany([
        ...makeFakeMoviesWithOutId(),
        ...makeFakeMoviesWithOutId()
      ])
      const movies = await sut.getMovies({ skip: 3, limit: 1 })

      expect(movies.totalCount).toBe(4)
      expect(movies.movies.length).toBe(1)
      expect(movies.movies[0].title).toBe('other_title')
    })
  })

  describe('DeleteMovies', () => {
    it('should delete all movies', async () => {
      await MovieModel.insertMany(makeFakeMoviesWithOutId())
      await sut.deleteMovies()
      const movies = await MovieModel.find().lean()

      expect(movies.length).toBe(0)
    })
  })
})