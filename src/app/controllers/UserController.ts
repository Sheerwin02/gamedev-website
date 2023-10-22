import { NextApiRequest, NextApiResponse } from 'next';
import { ControllerBase } from '../base/ControllerBase';
import UserRepository from '../repositories/UserRepository'; 

const userRepository = UserRepository.getInstance(); 

export class UserController extends ControllerBase {
  constructor() {
    super();
  }

  public async getAllUsers(req: NextApiRequest, res: NextApiResponse) {
    try {
      const users = await userRepository.getAll();
      res.status(200).json(users);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async getUserById(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      const user = await userRepository.getById(Number(id));
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async createUser(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { name, phoneNumber, password, email, enabled } = req.body;
      const user = await userRepository.create({
        name,
        phoneNumber,
        password,
        email,
        enabled,
      });
      res.status(201).json(user);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async updateUser(id: number, data: {
    name: string;
    phoneNumber: string;
    password: string;
    email: string;
    enabled: number;
  }, res: NextApiResponse) {
    try {
      const updatedUser = await userRepository.update(id, data);
      res.status(200).json(updatedUser);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async deleteUser(id: number, res: NextApiResponse) {
    try {
      await userRepository.delete(id);
      res.status(204).end();
    } catch (error) {
      this.handleError(error, res);
    }
  }
}
