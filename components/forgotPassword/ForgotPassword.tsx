import React, { useState } from "react";

interface ForgotPasswordProps {
  // Add any additional props if needed
}

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const clearErrors = () => {
    setErrors({});
  };

  const handleForgotPassword = async () => {
    clearErrors();
    setLoading(true);

    // Validate email
    if (!email.trim()) {
      setErrors({ email: "Email is required" });
      setLoading(false);
      return;
    }

    try {
      // Send reset password link to email
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setToastMessage("Password reset link sent to your email successfully");
        setShowToast(true);

        // Reset the form
        setEmail("");
      } else {
        const errorData = await response.json();
        setErrors({
          email: `Failed to send reset link. Error: ${errorData.error.message}`,
        });
      }
    } catch (error) {
      setToastMessage("Error during forgot password. Please try again.");
      setShowToast(true);
    } finally {
      setLoading(false);
      // Close the toast after 5 seconds
      setTimeout(() => {
        setShowToast(false);
        setToastMessage("");
      }, 5000);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 bg-white rounded-md shadow-md w-96">
        <h1 className="text-3xl mb-6 font-semibold text-center text-indigo-700">
          Forgot Password
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleForgotPassword();
          }}
        >
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className={`mt-1 p-3 w-full border rounded-md text-black focus:outline-none focus:ring focus:border-indigo-300 transition duration-300 ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Enter your email"
              disabled={loading}
            />
            {/* {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )} */}
          </div>

          {/* Submit Button */}
          <button
            className={`${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:bg-gradient-to-r hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600"
            } text-white py-3 px-6 rounded-md focus:outline-none focus:ring focus:border-indigo-300 w-full transition duration-300`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>

        {/* Visual Feedback for Success and Errors */}
        {(showToast || Object.keys(errors).length > 0) && (
          <div className="mt-4">
            {showToast && (
              <p className="text-green-500 text-sm">{toastMessage}</p>
            )}
            {Object.keys(errors).map((key) => (
              <p key={key} className="text-red-500 text-sm">
                {errors[key]}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
