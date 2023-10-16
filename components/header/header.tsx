import { Link, Button } from "@nextui-org/react";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { useState } from "react";

export const NavBar = () => {
  const [activeItem, setActiveItem] = useState(0);

  // Define your custom border bottom shadow
  const shadowStyle = {
    boxShadow: "0 5px 5px rgba(255, 255, 255, 0.5)",
  };

  return (
    <div
      className="z-50 bg-gray-900 text-white pl-10 sticky top-0 shadow-xl"
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
              href="#aboutus"
              aria-current="page"
              className="nav-link"
              onClick={() => setActiveItem(0)}
            >
              About Us
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
              href="#countdown"
              aria-current="page"
              onClick={() => setActiveItem(1)}
            >
              Countdown
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
              className="rounded-full bg-blue-600 text-white px-4 py-1.5  hover:bg-blue-700"
              onClick={() => {
                console.log("clicked");
              }}
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
