import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { ControllerBase } from '../base/ControllerBase';
import UserRepository from '../repositories/UserRepository';
import { generateToken, verifyToken } from '../../../utils/auth';

// Access the JWT_SECRET from the environment variables
const jwtSecret = process.env.JWT_SECRET || 'default-secret-key';
const userRepository = UserRepository.getInstance();

export class UserController extends ControllerBase {
  constructor() {
    super();
  }

  public async loginUser(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { email, password } = req.body;
      const user = await userRepository.getByEmail(email);

      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      // Check if the password is correct
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: 'Incorrect password' });
      }

      // Generate JWT token with user data
      const token = generateToken({ userId: user.id, email: user.email });

      // Send the token back to the client
      res.status(200).json({ token });
    } catch (error) {
      this.handleError(error, res);
    }
  }


  public async getAllUsers(req: NextApiRequest, res: NextApiResponse) {
    try {
      // Use the authentication middleware to verify the JWT token
      await verifyToken(req, res);

      // Continue with the actual API logic
      const users = await userRepository.getAll();
      res.status(200).json(users);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async getUserById(req: NextApiRequest, res: NextApiResponse) {
    try {
      // Use the authentication middleware to verify the JWT token
      await verifyToken(req, res);

      // Continue with the actual API logic
      const { id } = req.query;
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
      // Use the authentication middleware to verify the JWT token
      // await verifyToken(req, res);

      // Continue with the actual API logic
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

  public async enableSubscription(req: NextApiRequest, res: NextApiResponse) {
    try {
      // Use the authentication middleware to verify the JWT token
      await verifyToken(req, res);

      // Continue with the actual API logic
      const { id } = req.query;
      const enabledUser = await userRepository.enable(Number(id));
      res.status(200).json(enabledUser);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  public async disableSubscription(req: NextApiRequest, res: NextApiResponse) {
    try {
      // Use the authentication middleware to verify the JWT token
      await verifyToken(req, res);

      // Continue with the actual API logic
      const { id } = req.query;
      const disabledUser = await userRepository.disable(Number(id));
      res.status(200).json(disabledUser);
    } catch (error) {
      this.handleError(error, res);
    }
  }
}
