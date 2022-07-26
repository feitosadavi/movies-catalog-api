import { MockProxy, mock } from 'jest-mock-extended'

import { GetMovies } from '@/application/usecases'
import { IMoviesRepository } from '@/application/protocols'
import { makeFakeMovies } from '@tests/domain/fakes'

describe('GetMovies', () => {
  let fakeMoviesRepository: MockProxy<IMoviesRepository>
  let sut: GetMovies

  const mockReturn = (): IMoviesRepository.GetMoviesOutput => ({
    movies: makeFakeMovies(),
    totalCount: 2
  })

  beforeAll(() => {
    fakeMoviesRepository = mock()
    fakeMoviesRepository.getMovies.mockResolvedValue(mockReturn())
  })
  beforeEach(() => {
    sut = new GetMovies(fakeMoviesRepository)
  })

  it('should moviesRepository save many movies', async () => {
    await sut.execute({})

    expect(fakeMoviesRepository.getMovies).toHaveBeenCalled()
  })
})