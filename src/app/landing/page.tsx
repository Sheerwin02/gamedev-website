"use client";
import { useEffect } from 'react';
import { executeAnimation } from './script';
import gif from './loading.gif';
import Image from 'next/image';

export default function LandingPage() {
  useEffect(() => {
    executeAnimation();

    if (typeof window !== 'undefined') {
      // Ensure this code only runs in the browser
      setTimeout(() => {
        window.location.href = '/'; // Redirect to the home page
      }, 3000); // Redirect after 3 seconds (adjust as needed)
    }
  }, []);

  return (
    <div className="conetent">
      <div className=" fixed top-0 left-0 bg-#292826 w-full h-full flex justify-center items-center">
        <Image src={gif} alt="" className="max-w-full max-h-full flex justify-center items-center" />
      </div>
      <div className="box-border p-0 m-0">
        <div className="text-white flex justify-center items-center h-full font-light text-center">
          <div className="fixed top-0 left-0 bg-gray-800 w-full h-full m-auto overflow-hidden bottom-0 right-0">
            <Image src={gif} alt="" className="max-w-full max-h-full flex justify-center items-center" />
          </div>
        </div>
      </div>
      <div className='animate_content'>
      <div className=" animate scale-10 scale-35 opacity-35 scale-50 opacity-50 scale-85 opacity-85 scale-100">
  {/* @keyframes animate */}
      </div>
      </div>
      <div className="fadeIn z-10">
        <div className="page__description">
          <h1 className="mt-100">
            <div className="fixed top-0 left-0 bg-gray-800 w-full h-full m-auto overflow-hidden bottom-0 right-0">
              <Image src={gif} alt="" className="max-w-full max-h-full flex justify-center items-center" />
          </div>
        </h1>
    </div>
  </div>
</div>
        );
}
