import { useState } from "react";
import { useRouter } from "next/router";

const ResetPasswordForm = ({ token }: { token: string }) => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleResetPassword = async () => {
    // Validate passwords
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // logic to send a request to server to reset the password
    const response = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, password }),
    });

    if (response.ok) {
      // Password reset successfully, redirect to login or any other page
      setSuccessMessage("Password reset successfully!");
      setErrorMessage("");
      router.push("/");
    } else {
      // Handle error response
      console.error("Failed to reset password:", response.statusText);
      setSuccessMessage("");
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-md shadow-md bg-white">
      <h1 className="text-2xl font-semibold mb-4 text-indigo-700">
        Reset Password
      </h1>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          New Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-3 w-full border rounded-md text-black focus:outline-none focus:ring focus:border-indigo-300 transition duration-300"
          placeholder="Enter your new password"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mt-1 p-3 w-full border rounded-md text-black focus:outline-none focus:ring focus:border-indigo-300 transition duration-300"
          placeholder="Confirm your new password"
        />
      </div>

      {errorMessage && (
        <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
      )}

      <button
        onClick={handleResetPassword}
        className="bg-indigo-500 text-white py-3 px-6 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300 transition duration-300"
      >
        Reset Password
      </button>

      {successMessage && (
        <p className="text-green-500 text-sm mt-4">{successMessage}</p>
      )}
    </div>
  );
};

export default ResetPasswordForm;
