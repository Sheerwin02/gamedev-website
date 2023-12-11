"use client";

import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { AboutGame } from "../components/aboutus/AboutUs";
import { AboutUs } from "../components/aboutus/OurTeam";
import Loader from "../components/loader/loader";
import Head from "next/head";
import { Footer } from "../components/footer/footer";
import NavBar from "../components/header/Header";
import { IntroVideo } from "../components/aboutus/IntroBanner";
import RegisterPage from "./register";
import Recruitments from "./recruitment";
import Donation from "./donation";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  // Loader
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  });

  return (
    <>
      {/* Use the Head component to modify the head of the HTML document */}
      <Head>
        {/* Meta tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Game Studio Website" />

        {/* Title and logo */}
        <title>Hana Studio</title>
        {/* <link rel="icon" href="/path-to-your-logo.png" /> */}

        {/* Your custom stylesheets or scripts */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Add your custom CSS or JS files here */}
      </Head>
      {loading ? (
        // Display loading screen first if webpage still building
        <Loader />
      ) : (
        <>
          <NavBar />
          <>
            {/* <Countdown /> */}
            {/* <OTP /> */}
            {/* <RegisterPage /> */}
            <IntroVideo />
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-black text-white {inter.className}">
              <AboutGame />
              <AboutUs />
              <Recruitments />
              <Donation />
            </div>
          </>
          <Footer />
          <ToastContainer />
        </>
      )}
    </>
  );

  // return (
  //   <div>
  //     <LoginPage />;
  //   </div>
  // );
};

export default Home;
