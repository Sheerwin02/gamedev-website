import React, { useState, useRef, useEffect } from "react";

interface OTPProps {
  onVerify: (otp: string) => void;
  onClose?: () => void;
  onResend?: () => void;
  email: string;
}

const OTP: React.FC<OTPProps> = ({ onVerify, onClose, onResend, email }) => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(6).fill(null));

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (otp.some((digit) => digit === "")) {
      errors.otp = "Please fill in all OTP digits";
    } else if (!otp.every((digit) => /^\d$/.test(digit))) {
      errors.otp = "Invalid OTP format. Please use numbers only";
    }

    return errors;
  };

  const handleVerifyOTP = async () => {
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const enteredOTP = otp.join("");

    // Call the API for OTP verification
    try {
      // Replace the following line with actual API call
      // const response = await fetch("/api/verify-otp", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ otp: enteredOTP }),
      // });

      // Placeholder: Trigger onVerify for testing
      onVerify(enteredOTP);
    } catch (error) {
      console.error(
        `Error during OTP verification: ${(error as Error).message}`
      );
      // Handle error, show toast, etc.
    }
  };

  const handleDigitChange = (index: number, value: string) => {
    const updatedOTP = [...otp];
    updatedOTP[index] = value;
    setOTP(updatedOTP);
    setErrors({ ...errors, otp: "" });

    if (index < 5 && value !== "") {
      inputRefs.current[index + 1]?.focus();
    }

    if (index === 5 && value !== "" && !Object.keys(validateForm()).length) {
      handleVerifyOTP();
    }
  };

  const handleDigitKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendOTP = async () => {
    try {
      setResendDisabled(true);

      // Call the API for resending OTP
      try {
        // Replace the following line with actual API call
        const otpResponse = await fetch("/api/otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "sendOtp",
            email,
          }),
        });

        if (!otpResponse.ok) {
          const otpErrorData = await otpResponse.json();
          setShowToast(true);
          setToastMessage(`OTP resend failed. Error: ${otpErrorData.error}`);
          return;
        }

        // Placeholder: Trigger onResend for testing
        onResend && onResend();
      } catch (error) {
        console.error(`Error resending OTP: ${(error as Error).message}`);
        // Handle error, show toast, etc.
      }

      setResendCountdown(60);

      const countdownInterval = setInterval(() => {
        setResendCountdown((prev) => prev - 1);
      }, 1000);

      setTimeout(() => {
        setResendDisabled(false);
        clearInterval(countdownInterval);
      }, 60000);
    } catch (error) {
      console.error(`Error resending OTP: ${(error as Error).message}`);
      // Handle error, show toast, etc.
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50 transition-opacity" />

      <div className="relative z-10 p-4 max-w-md mx-auto bg-white rounded-md shadow-md transition-opacity transform">
        <h2 className="text-xl font-semibold mb-2">OTP Verification</h2>
        <div className="mb-4 flex justify-center">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              className={`w-12 h-12 m-2 text-2xl text-center border rounded-md focus:outline-none focus:ring focus:border-indigo-300 ${
                errors.otp ? "border-red-500" : ""
              }`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleDigitChange(index, e.target.value)}
              onKeyDown={(e) => handleDigitKeyDown(index, e)}
              style={{ color: "black" }}
            />
          ))}
        </div>

        {errors.otp && (
          <p className="text-red-500 text-xs mt-1">{errors.otp}</p>
        )}

        <button
          className="bg-indigo-500 text-white py-3 px-6 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300 w-full mb-4"
          type="button"
          onClick={handleVerifyOTP}
        >
          Verify OTP
        </button>

        <div className="flex space-x-7 mb-4">
          <button
            className={`text-indigo-500 hover:text-indigo-900 text-sm focus:outline-none mt-2 ${
              resendDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="button"
            onClick={handleResendOTP}
            disabled={resendDisabled}
          >
            {resendDisabled
              ? `Resend OTP in ${resendCountdown}s`
              : "Resend OTP"}
          </button>

          <button
            className="text-red-500 hover:text-red-700 text-sm focus:outline-none mt-2"
            type="button"
            onClick={() => {
              console.log("Cancel button clicked");
              onClose && onClose();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTP;
