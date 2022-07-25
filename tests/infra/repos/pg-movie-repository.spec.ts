import MockDate from 'mockdate';
import { Repository } from 'typeorm';

import { PgMovieRepository, AppDataSource } from '@/infra/repos/postgres';
import { MovieEntity } from '@/infra/repos/entities';
import { makeFakeMoviesWithOutId } from '@tests/domain/fakes';

describe('moviesRepository', () => {
  const makeSut = () => new PgMovieRepository();

  let movieRepository: Repository<MovieEntity>;
  beforeAll(async () => {
    MockDate.set(new Date());
    await AppDataSource.initialize();
    movieRepository = AppDataSource.getRepository(MovieEntity);
  });
  beforeEach(() => {
    movieRepository.clear();
  });
  afterAll(() => {
    MockDate.reset();
    AppDataSource.destroy();
  });
  test('should LoadmovieById return a movie', async () => {
    const sut = makeSut()
    await sut.save(makeFakeMoviesWithOutId())
    const movies = await movieRepository.find()
    expect(movies.length === 2).toBe(true);
  });
  // test('should Createmovie create and return a movie', async () => {
  //   const movie = await postgresmovie.create({
  //     name: 'Tenis',
  //     price: 1300,
  //     quantity: 2,
  //   });
  //   expect(movie.id).toBeTruthy();
  //   expect(movie.created_at).toBeTruthy();
  //   expect(movie.updated_at).toBeTruthy();
  //   expect(movie.name).toBe('Tenis');
  //   expect(movie.price).toBe(1300);
  //   expect(movie.quantity).toBe(2);
  //   await movieRepository.delete({ id: movie.id }); // clears database
  // });
});