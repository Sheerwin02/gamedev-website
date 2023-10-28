"use client";

import "@/app/globals.css";
import { AboutGame } from "./about-us/about-us";
import { IntroVideo } from "./about-us/intro-banner";
import { AboutUs } from "./about-us/our-team";

export default function Home() {
  return (
    <div>
      {/* <Countdown /> */}
      <IntroVideo />
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 {inter.className}">
        <AboutGame />
        <AboutUs />
      </div>
    </div>
  );
}
