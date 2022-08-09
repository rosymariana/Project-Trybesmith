import connection from '../models/connection';
import ProductModel from '../models/ProductModel';
import { Product } from '../types/types';

class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const product = await this.model.getAll();
    return product;
  }

  public create = async (prod: Product): Promise<Product> => {
    const product = await this.model.create(prod);
    return product;
  };
}

export default ProductService;