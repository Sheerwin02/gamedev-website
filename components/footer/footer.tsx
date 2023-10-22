import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  const notify = () => {
    toast.success("You have successfully subscribed to our newsletter!", {
      position: "bottom-right",
      pauseOnHover: false,
      autoClose: 2000, // Close the toast after 2 seconds
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold">Subscribe to Our Newsletter</h3>
          <p className="text-gray-300 mt-2">
            Stay updated with our latest news and updates.
          </p>
          <button
            onClick={notify}
            className="bg-white text-gray-900 px-4 py-2 mt-2 rounded-full hover:bg-gray-100 font-semibold"
          >
            Subscribe
          </button>
        </div>
        <div className="my-6">
          <h4 className="text-2xl font-bold">Follow Us</h4>
          <div className="flex justify-center mt-2 space-x-6">
            {/* Social Media Icons */}
            <SocialIcon
              network="facebook"
              url="https://www.facebook.com/"
              className="custom-class"
              fgColor="currentColor"
            />
            <SocialIcon
              network="instagram"
              url="https://www.instagram.com/"
              className="custom-class"
              fgColor="currentColor"
            />
            <SocialIcon
              network="twitter"
              url="https://twitter.com/"
              className="custom-class"
              fgColor="currentColor"
            />
            <SocialIcon
              network="discord"
              url="https://discord.gg/"
              className="custom-class"
              fgColor="currentColor"
            />
          </div>
        </div>
        <p className="mt-2 text-gray-300">&copy; Copyright 2023 ABC Studio</p>
      </div>
    </footer>
  );
};
