import { Product } from '@/domain/entities';
import { ICreateProduct } from '@/domain/usecases';

export const makeFakeProductsModel = (): Product[] => ([{
  id: 'any_id',
  name: 'any_name',
  price: 9999,
  quantity: 9999,
  created_at: new Date(),
  updated_at: new Date(),
}]);

export const makeFakeCreateParams = (): ICreateProduct.Params => ({
  name: 'any_name',
  price: 9999,
  quantity: 9999,
});
