import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import OTP from "./otp";
import { setToken } from "../../redux/authSlice";
import {
  calculatePasswordStrength as calculatePasswordStrengthUtil,
  validateForm,
} from "@/app/utils/formValidationUtils";

interface RegisterProps {
  // Add any additional props if needed
}

const Register: React.FC<RegisterProps> = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [enabled, setEnabled] = useState<number>(0);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  const dispatch = useDispatch();

  // State to control the visibility of the OTP component
  const [showOTP, setShowOTP] = useState(false);

  const clearErrors = () => {
    setErrors({});
  };

  const handleSuccessfulRegistration = async (token: string) => {
    dispatch(setToken(token));

    setShowToast(true);
    setToastMessage("Registration successful");
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const handleRegister = async () => {
    clearErrors();

    const formErrors = validateForm(
      name,
      phoneNumber,
      email,
      password,
      confirmPassword
    );

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      // Step 1: Request OTP
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
        setToastMessage(`OTP request failed. Error: ${otpErrorData.error}`);
        setTimeout(() => {
          setShowToast(false);
        }, 5000);
        return;
      }

      // Step 2: Show OTP component
      setShowOTP(true);
    } catch (error) {
      setShowToast(true);
      setToastMessage(`Error during registration: ${(error as Error).message}`);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  };

  const handleOTPVerification = async (enteredOtp: string) => {
    try {
      // Step 3: Verify OTP
      const otpVerificationResponse = await fetch("/api/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "verifyOtp",
          email,
          enteredOtp,
          // Add any additional data needed for OTP verification
        }),
      });

      if (!otpVerificationResponse.ok) {
        const otpVerificationErrorData = await otpVerificationResponse.json();
        setShowToast(true);
        setToastMessage(
          `OTP verification failed. Error: ${otpVerificationErrorData.error}`
        );
        setTimeout(() => {
          setShowToast(false);
        }, 5000);
        return;
      }

      // Step 4: Register user after OTP verification
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phoneNumber,
          email,
          password,
          enabled,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(setToken(data.token));
        handleSuccessfulRegistration(data.token);
      } else {
        const errorData = await response.json();
        setShowToast(true);
        setToastMessage(`Registration failed. Error: ${errorData.error}`);
        setTimeout(() => {
          setShowToast(false);
        }, 5000);
      }
      setShowOTP(false);
    } catch (error) {
      setShowToast(true);
      setToastMessage(`Error during registration: ${(error as Error).message}`);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  };

  const calculatePasswordStrength = () => {
    const strength = calculatePasswordStrengthUtil(password);
    setPasswordStrength(strength);
  };

  return (
    <div
      className={`flex items-center justify-center h-screen text-gray-800 transition-opacity ${
        showToast ? "" : "opacity-100"
      }`}
    >
      <div className="p-6 bg-white rounded-md shadow-md w-96 bg-opacity-50">
        <h1 className="text-3xl mb-6 font-semibold text-center text-indigo-700">
          Register
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Only call handleRegister if OTP component is not visible
            if (!showOTP) {
              handleRegister();
            }
          }}
        >
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-300 ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Phone Number Input */}
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-300 ${
                errors.phoneNumber ? "border-red-500" : ""
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-300 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
                calculatePasswordStrength();
              }}
              onBlur={calculatePasswordStrength}
              value={password}
              className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-300 ${
                errors.password ? "border-red-500" : ""
              }`}
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-300 ${
                errors.confirmPassword ? "border-red-500" : ""
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Password Strength Indicator */}
          {passwordStrength > 0 && password && (
            <div className="mb-4">
              <div className="text-sm font-medium text-gray-700">
                Password Strength:{" "}
                <span
                  className={`${
                    passwordStrength >= 0.7
                      ? "text-green-600"
                      : passwordStrength >= 0.4
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {passwordStrength >= 0.7
                    ? "Strong"
                    : passwordStrength >= 0.4
                    ? "Moderate"
                    : "Weak"}
                </span>
              </div>
              <div className="relative">
                <div
                  className={`h-2 rounded-md ${
                    passwordStrength >= 0.7
                      ? "bg-gradient-to-r from-green-400 to-green-700"
                      : passwordStrength >= 0.4
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-700"
                      : "bg-gradient-to-r from-red-400 to-red-700"
                  }`}
                  style={{ width: `${(passwordStrength * 100).toFixed(0)}%` }}
                />
              </div>
            </div>
          )}

          {/* Subscribe to News Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="enabled"
              name="enabled"
              onChange={(e) => {
                setEnabled(e.target.checked ? 1 : 0);
              }}
              checked={enabled === 1}
              className="mr-2"
            />
            <label
              htmlFor="enabled"
              className="text-sm font-medium text-gray-700"
            >
              Subscribe to Hana Studio's newsletter
            </label>
          </div>

          {/* Submit Button */}
          {!showOTP && (
            <button
              className="bg-indigo-500 text-white py-3 px-6 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300 w-full"
              type="submit"
            >
              Create Account
            </button>
          )}
        </form>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-5 right-5 p-4 bg-green-500 text-white rounded-md">
          {toastMessage}
        </div>
      )}

      {/* Modal for OTP */}
      {showOTP && (
        <OTP
          onVerify={handleOTPVerification}
          onClose={() => setShowOTP(false)}
          email={email} // Pass the email to OTP component
        />
      )}
    </div>
  );
};

export default Register;
