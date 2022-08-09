import connection from '../models/connection';
import OrdersModel from '../models/OrdersModel';
import { Order } from '../types/types';
import ProductModel from '../models/ProductModel';

class OrdersService {
  private model: OrdersModel;

  private poductModel: ProductModel;

  constructor() {
    this.model = new OrdersModel(connection);
    this.poductModel = new ProductModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    const productIds = await Promise.all(orders.map((order: Order) => {
      const id = this.poductModel.findById(order.id);
      return id;
    }));
    orders.forEach((_order, index) => { orders[index].productsIds = productIds[index]; });
    return orders;
  }
}

export default OrdersService;