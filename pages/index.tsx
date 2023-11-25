"use client";

import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { IntroVideo } from "../components/aboutus/IntroBanner";
import { AboutGame } from "../components/aboutus/AboutUs";
import { AboutUs } from "../components/aboutus/OurTeam";
import LoginPage from "../components/login/login";
import Loader from "../components/loader/loader";

import { Footer } from "../components/footer/footer";
import Register from "../components/register/register";
import OTP from "../components/register/otp";
import { Recruitment } from "@/app/models/Recruitment";
import { NavBar } from "../components/header/Header";
import Recruitments from "./recruitment";
import RegisterPage from "./register";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  // Loader
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  });

  // Navbar
  const [isOpenLoginDialog, setIsOpenLoginDialog] = useState(false);

  const changeLoginDialogStatus = () => {
    setIsOpenLoginDialog(!isOpenLoginDialog);
  };

  return (
    <div>
      {loading ? (
        // Display loading screen first if webpage still building
        <Loader />
      ) : (
        <div
        // className={`${
        //   isOpenLoginDialog
        //     ? "fixed top-0 left-0 w-full h-full bg-gray-800 overflow-hidden"
        //     : ""
        // }`}
        >
          <NavBar changeLoginDialogStatus={changeLoginDialogStatus} />
          {/* {isOpenLoginDialog ? (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="max-w-fit max-h-fit relative">
                <div
                  className="cursor-pointer text-white text-4xl mb-2 mr-2 justify-end flex"
                  onClick={changeLoginDialogStatus}
                >
                  &times;
                </div>
                <div className="bg-transparent relative">
                  <LoginPage />
                </div>
              </div>
            </div>
          ) : null} */}
          <div>
            {/* <Countdown /> */}
            {/* <Recruitments /> */}
            {/* <OTP /> */}
            <RegisterPage />
            {/* <IntroVideo /> */}
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 {inter.className}">
              <AboutGame />
              <AboutUs />
            </div>
          </div>
          <Footer />
          <ToastContainer />
        </div>
      )}
    </div>
  );

  // return (
  //   <div>
  //     <LoginPage />;
  //   </div>
  // );
};

export default Home;
