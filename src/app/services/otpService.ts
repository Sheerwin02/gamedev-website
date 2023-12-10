import nodemailer from 'nodemailer';

export class OtpService {
  private static instance: OtpService | null = null;

  private constructor() {}

  static getInstance(): OtpService {
    if (!OtpService.instance) {
      OtpService.instance = new OtpService();
    }
    return OtpService.instance;
  }

  generateOtp(): string {
    // Generate a random 6-digit OTP
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  async sendOtpByEmail(email: string, otp: string): Promise<void> {
    try {
      // Set up nodemailer transporter (use your email provider's SMTP settings)
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '465', 10),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      // Email message
      const mailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: 'OTP Verification',
        text: `Your OTP is: ${otp}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);
    } catch (error: any) {
      // Explicitly type the error variable as any
      throw new Error(`Failed to send OTP email: ${error.message}`);
    }
  }
}
