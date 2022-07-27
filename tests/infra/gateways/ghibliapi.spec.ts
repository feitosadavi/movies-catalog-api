import { MockProxy, mock } from 'jest-mock-extended'

import { HttpGetClient, Ghibliapi, GhibliapiMovie } from '@/infra/gateways'
import { makeFakeMovies } from '@tests/domain/fakes'

const makeFakeGhibliapiMovie = (): GhibliapiMovie[] => ([{
  title: 'any_title',
  description: 'any_description',
  movie_banner: 'any_banner',
  producer: 'any_producer',
  director: 'any_director'
}])

describe('Ghibliapi', () => {
  let sut: Ghibliapi
  let fakeHttpGetClient: MockProxy<HttpGetClient>

  beforeAll(() => {
    fakeHttpGetClient = mock()
    fakeHttpGetClient.get.mockResolvedValue(makeFakeGhibliapiMovie())
  })

  beforeEach(() => {
    sut = new Ghibliapi(fakeHttpGetClient)
  })

  describe('LoadGhibliapiMovies', () => {
    it('should call HttpGetClient with correct values', async () => {
      await sut.loadMovies()

      expect(fakeHttpGetClient.get).toHaveBeenCalledWith({ url: 'https://ghibliapi.herokuapp.com/films' })
    })
    it('should return correct data, not mattering how much data came remotely', async () => {
      const movies = await sut.loadMovies()
      const resultTimesFifthy = Array(50).fill(makeFakeMovies()[0])
      expect(movies).toEqual(resultTimesFifthy)
    })
  })
})