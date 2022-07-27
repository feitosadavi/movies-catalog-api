import { MockProxy, mock } from 'jest-mock-extended'
import { DeleteMovies } from '../usecases'

import { DeleteMoviesController } from '@/application/controllers'

jest.mock('@/application/usecases/save-movies.ts')


describe('DeleteMoviesController', () => {
  let sut: DeleteMoviesController
  let fakeDeleteMovies: MockProxy<DeleteMovies>

  beforeAll(() => {
    fakeDeleteMovies = mock()
    fakeDeleteMovies.execute.mockResolvedValue()
  })
  beforeEach(() => {
    sut = new DeleteMoviesController(fakeDeleteMovies)
  })

  it('should call deleteMovies', async () => {
    await sut.handle({})

    expect(fakeDeleteMovies.execute).toHaveBeenCalled()
  })
  it('should return 200 on success', async () => {
    const res = await sut.handle({})

    expect(res).toEqual({
      statusCode: 204,
      body: {}
    })
  })
  it('should return 500 if throws', async () => {
    fakeDeleteMovies.execute.mockRejectedValueOnce(new Error())
    const res = await sut.handle({})
    expect(res).toEqual({
      statusCode: 500,
      body: 'Internal Server Error'
    })
  })
})