import connection from '../models/connection';
import UsersModel from '../models/UsersModel';
import { Users } from '../types/types';

class UsersService {
  private model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public create = async (user: Users): Promise<Users> => {
    const usuario = await this.model.create(user);
    return usuario;
  };
}

export default UsersService;