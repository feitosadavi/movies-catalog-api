export interface Controller<T = any> {
  handle (request: T): Promise<{
    statusCode: number,
    body: any
  }>
}
