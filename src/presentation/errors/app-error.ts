export default class AppError {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public readonly message: string,
    public readonly statusCode: number = 400,
  ) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
