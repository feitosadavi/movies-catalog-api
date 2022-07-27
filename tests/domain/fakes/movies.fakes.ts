import { Movie, MovieProps } from '../entities';

export const makeFakeMovies = (): Array<MovieProps & { _id: string }> => ([{
  _id: 'any_id',
  title: 'any_title',
  description: 'any_description',
  banner: 'any_banner',
  producer: 'any_producer',
  director: 'any_director',
}, {
  _id: 'other_id',
  title: 'other_title',
  description: 'other_description',
  banner: 'other_banner',
  producer: 'other_producer',
  director: 'other_director',
  }])

export const makeFakeMoviesWithOutId = (): MovieProps[] => ([{
  title: 'any_title',
  description: 'any_description',
  banner: 'any_banner',
  producer: 'any_producer',
  director: 'any_director',
}, {
  title: 'other_title',
  description: 'other_description',
  banner: 'other_banner',
  producer: 'other_producer',
  director: 'other_director',
}])