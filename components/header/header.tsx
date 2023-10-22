import { Link, Button } from "@nextui-org/react";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const headerHeight = 70;

export const NavBar = () => {
  const [activeItem, setActiveItem] = useState(0);

  // Define your custom border bottom shadow
  const shadowStyle = {
    boxShadow: "0 5px 5px rgba(255, 255, 255, 0.5)",
  };

  const notify = () => {
    toast.success("This function is not available yet", {
      position: "bottom-right",
      pauseOnHover: false,
      autoClose: 2000, // Close the toast after 2 seconds
    });
  };

  return (
    <div
      className={`z-50 bg-gray-900 text-white pl-10 sticky top-0 shadow-xl h-[${headerHeight}px]`}
      style={shadowStyle}
    >
      <Navbar
        classNames={{
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "px-4",
            "py-4",
            "text-lg",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:text-yellow-500",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[3px]",
            "data-[active=true]:after:bg-yellow-500",
          ],
        }}
      >
        <div className="flex items-center space-x-2.5">
          <div className="font-bold text-xl text-inherit cursor-default">
            Hana Studio
          </div>
        </div>
        <NavbarContent className="flex items-center max-w-full ">
          <NavbarItem
            isActive={activeItem === 0}
            className={`hover:text-yellow-500 ${
              activeItem === 0
                ? "text-yellow-500 font-medium leading-6 outline-none"
                : "text-white"
            }`}
          >
            <Link
              href="#aboutgame"
              aria-current="page"
              className="nav-link"
              onClick={() => {
                setActiveItem(0);
              }}
            >
              About Game
            </Link>
          </NavbarItem>
          <NavbarItem
            isActive={activeItem === 1}
            className={`"hover:text-yellow-500 ${
              activeItem === 1
                ? "text-yellow-500 font-medium leading-6 outline-none"
                : "text-white"
            }`}
          >
            <Link
              className="hover:text-yellow-500"
              href="#aboutus"
              aria-current="page"
              onClick={() => setActiveItem(1)}
            >
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem
            isActive={activeItem === 2}
            className={`"hover:text-yellow-500 ${
              activeItem === 2
                ? "text-yellow-500 font-medium leading-6 outline-none"
                : "text-white"
            }`}
          >
            <Link
              onClick={() => setActiveItem(2)}
              className="hover:text-yellow-500"
              aria-current="page"
              href="#devnote"
            >
              Dev Note
            </Link>
          </NavbarItem>
          <NavbarItem
            isActive={activeItem === 3}
            className={`"hover:text-yellow-500 ${
              activeItem === 3
                ? "text-yellow-500 font-medium leading-6 outline-none"
                : "text-white"
            }`}
          >
            <Link
              className="hover:text-yellow-500"
              href="#donation"
              onClick={() => setActiveItem(3)}
            >
              Donation
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              color="primary"
              className="bg-white text-gray-900 px-4 py-1.5 font-semibold rounded-full hover:bg-gray-100"
              onClick={notify}
              variant="bordered"
            >
              <div className="text-base">Join Us</div>
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};
