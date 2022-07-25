import { mockHttpGetClient } from '../mocks/client'
import { HttpGetClient, Ghibliapi } from '@/infra/gateways'

type SutType = {
  httpGetClientStub: HttpGetClient
  sut: Ghibliapi
}

describe('Ghibliapi', () => {
  const makeSut = (): SutType => {
    const httpGetClientStub = mockHttpGetClient()
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
  })
})