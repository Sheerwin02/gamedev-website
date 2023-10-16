import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <div>
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 content-center">
            By Hana Studio
          </p>
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 content-center">
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
