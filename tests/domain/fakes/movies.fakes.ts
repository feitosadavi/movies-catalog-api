import { Product } from '../entities';

export const makeFakeMovies = (): Product[] => ([{
  id: 'any_id',
  title: 'any_title',
  description: 'any_description',
  banner: 'any_banner',
  producer: 'any_producer',
  director: 'any_director',
}, {
  id: 'other_id',
  title: 'other_title',
  description: 'other_description',
  banner: 'other_banner',
  producer: 'other_producer',
  director: 'other_director',
}])