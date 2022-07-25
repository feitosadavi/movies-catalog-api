import { mockHttpGetClient } from '../mocks/client'
import { HttpGetClient, Ghibliapi, GhibliapiMovie } from '@/infra/gateways'
import { makeFakeMovies } from '@tests/domain/fakes'

type SutType = {
  httpGetClientStub: HttpGetClient
  sut: Ghibliapi
}

describe('Ghibliapi', () => {
  const makeFakeGhibliapiMovie = (): GhibliapiMovie[] => ([{
    title: 'any_title',
    description: 'any_description',
    movie_banner: 'any_banner',
    producer: 'any_producer',
    director: 'any_director'
  }, {
      title: 'other_title',
      description: 'other_description',
      movie_banner: 'other_banner',
      producer: 'other_producer',
      director: 'other_director'
    }])

  const makeSut = (): SutType => {
    const httpGetClientStub = mockHttpGetClient(makeFakeGhibliapiMovie())
    const sut = new Ghibliapi(httpGetClientStub)
    return {
      httpGetClientStub,
      sut
    }
  }

  describe('LoadGhibliapiMovies', () => {
    it('should call HttpGetClient with correct values', async () => {
      const { sut, httpGetClientStub } = makeSut()
      const getSpy = jest.spyOn(httpGetClientStub, 'get')
      await sut.loadMovies()

      expect(getSpy).toHaveBeenCalledWith({ url: 'https://ghibliapi.herokuapp.com/films' })
    })
    it('should return correct data', async () => {
      const { sut } = makeSut()
      const movies = await sut.loadMovies()
      expect(movies).toEqual(makeFakeMovies())
    })
  })
})