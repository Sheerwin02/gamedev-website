import React from "react";
import BackgroundImage from "../public/testing3.jpg";
import ForgotPassword from "../components/forgotPassword/ForgotPassword";

const ForgotPasswordPage: React.FC = () => {
  return (
    <div
      // TODO: Add Hana Studio logo
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`, // Set the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ForgotPassword />
    </div>
  );
};

export default ForgotPasswordPage;
