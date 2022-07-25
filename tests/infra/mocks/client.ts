import { HttpGetClient } from '../gateways';

export const mockHttpGetClient = (output: unknown) => {
  class HttpGetClientStub implements HttpGetClient {
    async get<T = any> (input: HttpGetClient.Input): Promise<T> {
      return await output as T
    }
  }
  return new HttpGetClientStub
}