import { Pool } from 'mysql2/promise';
import { Order } from '../types/types';

export default class OrdersModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Orders;');
    const [rows] = result;
    return rows as Order[];
  }
}