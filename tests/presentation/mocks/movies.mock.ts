import { IDownloadMoviesData } from '@/domain/usecases';

export const mockDownloadMoviesData = (): IDownloadMoviesData => {
  class DownloadMoviesDataStub implements IDownloadMoviesData {
    // eslint-disable-next-line space-before-function-paren
    async exec (): Promise<IDownloadMoviesData.Output> {

    }
  }
  return new DownloadMoviesDataStub();
};
