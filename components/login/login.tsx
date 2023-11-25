import React, { useState, useEffect } from "react";
import Toast from "./toast";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/authSlice";
import { selectToken } from "../../redux/authSlice";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const authToken = useSelector(selectToken);

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
        dispatch(setToken(data.token));
        setToastMessage(`Login successful. Welcome, ${email}!`);
        setShowToast(true);
        setIsDropdownOpen(false);
      } else {
        const errorData = (await response.json()) as { error: string };
        setToastMessage(`Login failed. Error: ${errorData.error}`);
        setShowToast(true);
      }
    } catch (error) {
      setToastMessage(`Error during login: ${(error as Error).message}`);
      setShowToast(true);
    }
  };

  const handleLogout = () => {
    dispatch(setToken(null));
    setToastMessage("Logged out successfully");
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timerId = setTimeout(() => {
        setShowToast(false);
        setToastMessage("");
      }, 5000);

      return () => clearTimeout(timerId);
    }
  }, [showToast]);

  return (
    <div className="flex items-center justify-center text-gray-800">
      <div className="relative">
        <button
          className="text-gray-800 p-4 focus:outline-none"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {authToken ? (
            <>
              <span>{`Logged in as ${email}`}</span> <br />
              <button
                className="text-indigo-500 hover:underline"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </>
          ) : (
            "Login"
          )}
        </button>
        {isDropdownOpen && (
          <div className="absolute top-0 right-0 mt-12 w-64">
            <div className="p-4 bg-white rounded-md shadow-md">
              <h1 className="text-xl mb-4 font-semibold text-center text-gray-800">
                {authToken ? `Welcome, ${email}!` : "Login"}
              </h1>
              {authToken ? (
                <button
                  className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300 w-full"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                  }}
                >
                  <div className="mb-4">
                    <label
                      className="block text-sm font-medium mb-2 text-gray-800"
                      htmlFor="email"
                    >
                      Email:
                    </label>
                    <input
                      className="w-full p-2 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring focus:border-indigo-300"
                      type="text"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-medium mb-2 text-gray-800"
                      htmlFor="password"
                    >
                      Password:
                    </label>
                    <input
                      className="w-full p-2 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring focus:border-indigo-300"
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300 w-full"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
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
