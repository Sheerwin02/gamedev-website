import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { ControllerBase } from '../base/ControllerBase';
import UserRepository from '../repositories/UserRepository';
import { generateToken, verifyToken } from '../../../utils/auth';
import { OtpService } from '../services/otpService';
import nodemailer from 'nodemailer';
import { CustomError, ErrorType } from '../db/errorHelper';
import NodeCache from 'node-cache';

const userRepository = UserRepository.getInstance();
const otpService = OtpService.getInstance();
const otpCache = new NodeCache();

const SMTP_CONFIG = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465', 10),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

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

// OTP verification session
public async sendOtp(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email } = req.body as { email: string };
    const otp = otpService.generateOtp();

    // Save the OTP in the cache with an expiration time (5 minutes)
    otpCache.set(email, otp, 300);

    // Send OTP to the user's email
    await this.sendOtpByEmail(email, otp);

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    this.handleError(error, res);
  }
}

public async verifyOtp(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, enteredOtp } = req.body as { email: string; enteredOtp: string };

    // Retrieve the stored OTP from the cache
    const storedOtp = otpCache.get(email);

    // Compare entered OTP with stored OTP
    if (enteredOtp === storedOtp) {
      res.status(200).json({ message: 'OTP verified successfully' });
    } else {
      res.status(400).json({ error: 'Invalid OTP' });
    }
  } catch (error) {
    this.handleError(error, res);
  }
}

private async sendOtpByEmail(email: string, otp: string): Promise<void> {
  try {
    const transporter = nodemailer.createTransport(SMTP_CONFIG);
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Hana Studio Member Registration - OTP Verification',
      text: `Thanks for joining us. Your OTP is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new CustomError(ErrorType.InternalServerError, 'Failed to send OTP email');
  }
}
}
