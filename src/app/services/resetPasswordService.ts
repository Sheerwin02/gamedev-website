import { CustomError, ErrorType } from '../db/errorHelper';
import { UserPayload, generateToken, verifyToken } from '../../../utils/auth';
import nodemailer from 'nodemailer';
import UserRepository from '../repositories/UserRepository';
import { AuthenticatedNextApiRequest } from '../../../types/custom';
import { NextApiResponse } from 'next';

class ResetPasswordService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async generateResetToken(email: string): Promise<string> {
    const user = await this.userRepository.getByEmail(email);

    if (!user) {
      throw new CustomError(ErrorType.NotFound, 'User not found');
    }

    const resetToken = generateToken({ userId: user.id, email: user.email });

    // Send the reset token to the user's email
    await this.sendResetTokenByEmail(email, resetToken);

    return resetToken;
  }

  public async verifyResetToken(token: string, req: AuthenticatedNextApiRequest, res: NextApiResponse): Promise<{ userId: number; email: string }> {
    try {
      // Verify the reset token with your secret key
      const decodedToken = await verifyToken(token);

      if (!decodedToken) {
        throw new CustomError(ErrorType.BadRequest, 'Invalid reset token');
      }

      // Extract user information from the decoded token
      const { userId, email } = decodedToken as UserPayload;

      return { userId, email };
    } catch (error) {
      throw new CustomError(ErrorType.BadRequest, 'Invalid reset token');
    }
  }

  public async resetPassword(userId: number, newPassword: string): Promise<void> {
    await this.userRepository.updatePassword(userId, newPassword);
  }

  private async sendResetTokenByEmail(email: string, resetToken: string): Promise<void> {
    try {
      // TODO: Include real base URL here after deployment
      const baseUrl = process.env.BASE_URL || 'localhost:3000';
      const resetLink = `http://${baseUrl}/reset-password?token=${resetToken}`;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '465', 10),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Password Reset - Hana Studio Member',
        text: `Click on the following link to reset your password: ${resetLink}`,
      };

      await transporter.sendMail(mailOptions);
    } catch (error) {
      throw new CustomError(ErrorType.InternalServerError, 'Failed to send password reset link');
    }
  }
}

export default ResetPasswordService;
