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
})