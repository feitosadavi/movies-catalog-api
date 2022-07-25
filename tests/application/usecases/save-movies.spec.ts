import { MockProxy, mock } from 'jest-mock-extended'

import { makeFakeMovies } from '@tests/domain/fakes/movies.fakes'
import { GhibliapiGateway } from '@/application/gateways'
import { SaveMovies } from '@/application/usecases'
import { IMoviesRepository } from '@/application/repository'

jest.mock('@/application/gateways/ghibliapi.ts')

type SutType = {
  sut: SaveMovies
}

describe('SaveMovies', () => {
  let fakeGhibliapi: MockProxy<GhibliapiGateway>
  let fakeMoviesRepository: MockProxy<IMoviesRepository>
  let sut: SutType

  beforeAll(() => {
    fakeGhibliapi = mock()
    fakeMoviesRepository = mock()
    fakeGhibliapi.loadMovies.mockResolvedValue(makeFakeMovies())
    fakeMoviesRepository.saveMany.mockResolvedValue()
  })
  beforeEach(() => {
    sut = {
      sut: new SaveMovies(fakeGhibliapi, fakeMoviesRepository)
    }
  })

  it('should call ghibliapiGateway', async () => {
    await sut.sut.execute()

    expect(fakeGhibliapi.loadMovies).toHaveBeenCalled()
  })

  it('should moviesRepository save many movies', async () => {
    await sut.sut.execute()

    expect(fakeMoviesRepository.saveMany).toHaveBeenCalledWith(makeFakeMovies())
  })
})