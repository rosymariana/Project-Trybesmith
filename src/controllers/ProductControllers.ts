import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.service.getAll();
    res.status(200).json(result);
  };
  
  public create = async (req: Request, res: Response) => {
    const result = await this.service.create(req.body);
    res.status(201).json(result);
  };
}

export default ProductController;