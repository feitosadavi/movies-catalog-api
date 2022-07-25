import { HttpGetClient } from '../gateways';

export const mockHttpGetClient = () => {
  class HttpGetClientStub implements HttpGetClient {
    async get<T = any> (input: HttpGetClient.Input): Promise<T> {
      return await 'any_value' as unknown as T
    }
  }
  return new HttpGetClientStub
}