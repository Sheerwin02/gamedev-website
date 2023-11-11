"use client";

import { ToastContainer } from "react-toastify";
import Loader from "../components/loader/Loader";
import { Footer } from "../components/footer/footer";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { IntroVideo } from "../components/aboutus/IntroBanner";
import { AboutGame } from "../components/aboutus/AboutUs";
import { AboutUs } from "../components/aboutus/OurTeam";
import { NavBar } from "../components/header/Header";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  // Loader
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  });

  return (
    <div>
      {loading ? (
        // Display loading screen first if webpage still building
        <Loader />
      ) : (
        <div>
          <NavBar />
          <div>
            {/* <Countdown /> */}
            <IntroVideo />
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
