/* eslint-disable space-before-function-paren */
import { IDownloadMoviesData } from '@/domain/usecases';
import { Controller, HttpResponse } from '@/presentation/protocols';

export class DownloadMoviesDataController implements Controller {
  constructor(private readonly DownloadMovieData: IDownloadMoviesData) { }

  async handle (): Promise<HttpResponse> {
    try {
      await this.DownloadMovieData.exec();
      return {
        statusCode: 204,
        body: {},
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: {
          message: 'Erro interno do servidor',
        },
      };
    }
  }
}
