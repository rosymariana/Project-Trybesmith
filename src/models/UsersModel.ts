import { ResultSetHeader } from 'mysql2';
import { Pool } from 'mysql2/promise';
import { Users } from '../types/types';

export default class UsersModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (user: Users): Promise<Users> => {
    const { username, classe, level, password } = user;

    const query = 'INSERT INTO Trybesmith.Users'
    + '(username,classe, level, password) VALUES (?, ?, ?, ?);';
    const values = [username, classe, level, password];
     
    const [result] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId: id } = result;

    const newUser: Users = { id, username, classe, level, password };
    return newUser;
  };
}