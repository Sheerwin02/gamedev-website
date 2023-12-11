import { useState } from "react";
import { motion } from "framer-motion";
import { headerHeight } from "../components/header/Header";

const Donate = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    redirectToPlatform(option);
  };

  const redirectToPlatform = (option: string) => {
    const links: { [key: string]: string } = {
      patreon: "https://www.patreon.com/HanaStudio",
      openCollective: "https://opencollective.com/hanastudio",
    };

    window.open(links[option], "_blank");
  };

  return (
    <div
      id="donation"
      className="flex items-center justify-center bg-black text-white"
      style={{ scrollMarginTop: headerHeight + "px" }}
    >
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-md shadow-md text-gray-200">
        <h1 className="text-3xl font-extrabold mb-2 text-center text-purple-400">
          🚀 Support Hana Studio
        </h1>
        <p className="text-base mb-6 text-center text-gray-500">
          You are the key player of our journey
        </p>

        <div className="flex justify-around mb-8">
          <motion.div
            whileHover={{ scale: 1.05, backgroundColor: "#FA5B5B" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleOptionSelect("patreon")}
            className="cursor-pointer w-48 p-6 text-center text-white rounded-md"
          >
            <h2 className="text-xl font-semibold mb-2">Patreon</h2>
            <p className="text-sm">
              Join us on Patreon and become a valued supporter!
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, backgroundColor: "#21DE5A" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleOptionSelect("openCollective")}
            className="cursor-pointer w-48 p-6 text-center text-white rounded-md"
          >
            <h2 className="text-xl font-semibold mb-2">Open Collective</h2>
            <p className="text-sm">
              Contribute to our Open Collective and help us grow!
            </p>
          </motion.div>
        </div>

        <p className="mt-4 text-sm text-center text-gray-500">
          Note: You will be redirected to the selected platform in a new tab.
        </p>
      </div>
    </div>
  );
};

export default Donate;
