import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 p-3 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white uppercase ${
        showButton ? "scale-100 animate-float" : "scale-0"
      } transform transition-transform hover:scale-110 hover:rotate-3 hover:shadow-xl focus:outline-none focus:ring focus:ring-purple-300`}
      onClick={scrollToTop}
    >
      BACK TO TOP
    </button>
  );
};

export default BackToTopButton;
