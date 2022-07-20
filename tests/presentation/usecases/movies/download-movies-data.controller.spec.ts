import MockDate from 'mockdate';

import { IDownloadMoviesData } from '@/domain/usecases';
import { mockDownloadMoviesData } from '../../mocks/movies.mock';
import { DownloadMoviesDataController } from '@/presentation/controllers';

type SutType = {
  sut: DownloadMoviesDataController,
  downloadMoviesStub: IDownloadMoviesData
}

const makeSut = (): SutType => {
  const downloadMoviesStub = mockDownloadMoviesData();
  const sut = new DownloadMoviesDataController(downloadMoviesStub);
  return {
    sut,
    downloadMoviesStub,
  };
};

describe('ProductsRepository', () => {
  beforeAll(async () => {
    MockDate.set(new Date());
  });

  afterAll(() => {
    MockDate.reset();
  });
  test('should call craete with correct params', async () => {
    const { sut, downloadMoviesStub } = makeSut();
    const execSpy = jest.spyOn(downloadMoviesStub, 'exec');
    await sut.handle();
    expect(execSpy).toHaveBeenCalledWith();
  });

  test('should 500 on error', async () => {
    const { sut, downloadMoviesStub } = makeSut();
    jest.spyOn(downloadMoviesStub, 'exec').mockReturnValueOnce(Promise.reject(new Error()));
    const res = await sut.handle();
    expect(res).toEqual({
      statusCode: 500,
      body: {
        message: 'Erro interno do servidor',
      },
    });
  });

  test('should 204 on success', async () => {
    const { sut } = makeSut();
    const res = await sut.handle();
    expect(res).toEqual({
      statusCode: 204,
      body: {},
    });
  });
});
