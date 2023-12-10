import React from "react";
import Register from "../components/register/register";
import BackgroundImage from "../public/testing3.jpg";

const RegisterPage: React.FC = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`, // Set the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Register />
    </div>
  );
};

export default RegisterPage;
