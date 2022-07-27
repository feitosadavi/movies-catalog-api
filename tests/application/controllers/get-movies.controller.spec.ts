import { MockProxy, mock } from 'jest-mock-extended'
import { GetMovies } from '../usecases'

import { GetMoviesController } from '@/application/controllers'
import { makeFakeMovies } from '@tests/domain/fakes'

jest.mock('@/application/usecases/save-movies.ts')


describe('GetMoviesController', () => {
  let sut: GetMoviesController
  let fakeGetMovies: MockProxy<GetMovies>

  const makeResponse = () => ({
    movies: makeFakeMovies(),
    totalCount: 2
  })

  beforeAll(() => {
    fakeGetMovies = mock()
    fakeGetMovies.execute.mockResolvedValue(makeResponse())
  })
  beforeEach(() => {
    sut = new GetMoviesController(fakeGetMovies)
  })

  it('should call getMovies', async () => {
    await sut.handle({})

    expect(fakeGetMovies.execute).toHaveBeenCalled()
  })
  it('should return 200 on success', async () => {
    const res = await sut.handle({})

    expect(res).toEqual({
      statusCode: 200,
      body: makeResponse()
    })
  })
  it('should return 500 if throws', async () => {
    fakeGetMovies.execute.mockRejectedValueOnce(new Error())
    const res = await sut.handle({})
    expect(res).toEqual({
      statusCode: 500,
      body: 'Internal Server Error'
    })
  })
})