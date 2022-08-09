import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Pool } from 'mysql2/promise';
import { Product } from '../types/types';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    const [rows] = result;
    return rows as Product[];
  }

  public create = async (product: Product): Promise<Product> => {
    const { name, amount, orderId } = product;

    let query = 'INSERT INTO Trybesmith.Products (name, amount';
    const values: Array<string | number> = [name, amount];

    if (orderId) {
      query += ', orderId) VALUES (?, ?, ?);';
      values.push(orderId);
    } else {
      query += ') VALUES (?, ?);';
    }
  
    const [result] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId } = result;
  
    return { id: insertId, ...product };
  };

  public findById = async (id: number): Promise<number[]> => {
    const query = 'SELECT * FROM Trybesmith.Products WHERE orderId = ?;';

    const [rows] = await this.connection.execute<RowDataPacket[]>(query, [id]);
    const ids = rows.map((produto) => produto.id);
    return ids as number[];
  };
}