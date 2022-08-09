export interface Product {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface Users {
  username: string;
  classe: string;
  level: number;
  password?: string;
  id?: number;
}

export interface Order {
  id: number;
  userId: number;
  productsIds?: Array<number>;
}