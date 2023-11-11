"use client";

import { useState } from "react";
import Toast from "./toast";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/authSlice";

interface LoginPageProps {
  // Add any props if needed
}

const LoginPage: React.FC<LoginPageProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = (await response.json()) as { token: string };
        // Dispatch the setToken action to store the token in Redux
        dispatch(setToken(data.token));

        // Handle successful login
        setShowToast(true);
        setToastMessage(`Login successful. Token: ${data.token}`);
      } else {
        const errorData = (await response.json()) as { error: string };
        // Handle failed login
        setShowToast(true);
        setToastMessage(`Login failed. Error: ${errorData.error}`);
      }
    } catch (error) {
      // Handle network or other errors
      setShowToast(true);
      setToastMessage(`Error during login: ${(error as Error).message}`);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen text-white">
      <div className="p-8 bg-gray-800 rounded-md shadow-md w-96">
        <h1 className="text-3xl mb-6 font-semibold text-center">
          Welcome Back!
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:border-indigo-300"
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:border-indigo-300"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      {showToast && (
        <Toast
          message={toastMessage}
          onClose={() => {
            setShowToast(false);
            setToastMessage("");
          }}
        />
      )}
    </div>
  );
};

export default LoginPage;
