import { MockProxy, mock } from 'jest-mock-extended'

import { DeleteMovies } from '@/application/usecases'
import { IMoviesRepository } from '@/application/repository'

jest.mock('@/application/gateways/ghibliapi.ts')

type SutType = {
  sut: DeleteMovies
}

describe('DeleteMovies', () => {
  let fakeMoviesRepository: MockProxy<IMoviesRepository>
  let sut: SutType

  beforeAll(() => {
    fakeMoviesRepository = mock()
    fakeMoviesRepository.deleteMovies.mockResolvedValue()
  })
  beforeEach(() => {
    sut = {
      sut: new DeleteMovies(fakeMoviesRepository)
    }
  })

  it('should moviesRepository save many movies', async () => {
    await sut.sut.execute()

    expect(fakeMoviesRepository.deleteMovies).toHaveBeenCalled()
  })
})