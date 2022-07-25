import { MockProxy, mock } from 'jest-mock-extended'
import { SaveMovies } from '../usecases'

import { MovieController } from '@/application/controllers'

jest.mock('@/application/usecases/save-movies.ts')


describe('MovieController', () => {
  let sut: MovieController
  let fakeSaveMovies: MockProxy<SaveMovies>

  beforeAll(() => {
    fakeSaveMovies = mock()
    fakeSaveMovies.execute.mockResolvedValue()
  })
  beforeEach(() => {
    sut = new MovieController(fakeSaveMovies)
  })

  it('should call ghibliapiGateway', async () => {
    await sut.handle({})

    expect(fakeSaveMovies.execute).toHaveBeenCalled()
  })
  it('should return 200 on success', async () => {
    const res = await sut.handle({})

    expect(res).toEqual({
      statusCode: 204,
      body: {}
    })
  })
  it('should return 500 if throws', async () => {
    fakeSaveMovies.execute.mockRejectedValueOnce(new Error())
    const res = await sut.handle({})
    expect(res).toEqual({
      statusCode: 500,
      body: 'Internal Server Error'
    })
  })
})