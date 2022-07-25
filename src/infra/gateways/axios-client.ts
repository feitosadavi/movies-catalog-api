import axios from 'axios'

import { HttpGetClient } from '@/infra/gateways'

type Input = HttpGetClient.Input

export class AxiosHttpClient implements HttpGetClient {
  async get ({ url, params }: Input): Promise<any> {
    const result = await axios.get(url, { params })
    return result.data
  }
}