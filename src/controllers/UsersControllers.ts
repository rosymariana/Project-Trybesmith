import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UsersService from '../services/UsersService';
import { Users } from '../types/types';

export const secret = 'secredoAbsoluto';

const createToken = (data: Users) => {
  const token = jwt.sign({ data }, secret);
  return token;
};

class UsersController {
  private service: UsersService;

  constructor() {
    this.service = new UsersService();
  }

  public create = async (req: Request, res: Response) => {
    const result = await this.service.create(req.body);
    res.status(201).json({ token: createToken(result) });
  };
}

export default UsersController;