import { Link, Button } from "@nextui-org/react";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

export const headerHeight = 70;

export const NavBar = ({
  changeLoginDialogStatus,
}: {
  changeLoginDialogStatus: () => void;
}) => {
  const handleLoginButtonClick = () => {
    changeLoginDialogStatus();
  };

  // Navbar active item
  const [activeItem, setActiveItem] = useState(0);

  // Login dialog
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  // Hide navbar on scroll down
  // const [scrolling, setScrolling] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScrolling(true);
  //     } else {
  //       setScrolling(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // Define your custom border bottom shadow
  const shadowStyle = {
    boxShadow: "0 5px 5px rgba(255, 255, 255, 0.5)",
  };

  // Open & Close login dialog
  const openLoginDialog = () => {
    setIsLoginDialogOpen(true);
    changeLoginDialogStatus();
  };

  const closeLoginDialog = () => {
    setIsLoginDialogOpen(false);
  };

  return (
    // If want stick at top when scroll also, add "sticky" in classname
    <div
      className={`z-50 text-white bg-gray-900 shadow-xl pl-10 top-0 shadow-xl h-[${headerHeight}px] }`}
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
            "data-[active=true]:after:text-teal-300",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[3px]",
            "data-[active=true]:after:bg-teal-500",
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
            className={`hover:text-teal-500 ${
              activeItem === 0
                ? "text-teal-500 font-medium leading-6 outline-none"
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
            className={`"hover:text-teal-500 ${
              activeItem === 1
                ? "text-teal-500 font-medium leading-6 outline-none"
                : "text-white"
            }`}
          >
            <Link
              className="hover:text-teal-500"
              href="#aboutus"
              aria-current="page"
              onClick={() => setActiveItem(1)}
            >
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem
            isActive={activeItem === 2}
            className={`"hover:text-teal-500 ${
              activeItem === 2
                ? "text-teal-500 font-medium leading-6 outline-none"
                : "text-white"
            }`}
          >
            <Link
              onClick={() => setActiveItem(2)}
              className="hover:text-teal-500"
              aria-current="page"
              href="#devnote"
            >
              Dev Note
            </Link>
          </NavbarItem>
          <NavbarItem
            isActive={activeItem === 3}
            className={`"hover:text-teal-500 ${
              activeItem === 3
                ? "text-teal-500 font-medium leading-6 outline-none"
                : "text-white"
            }`}
          >
            <Link
              className="hover:text-teal-500"
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
              onClick={openLoginDialog}
              variant="bordered"
            >
              <div className="text-base">Login</div>
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {/* {isLoginDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-transparent w-4/12 relative">
            <div className="absolute right-0 bottom-60">
              <div
                className="cursor-pointer text-white text-4xl"
                onClick={closeLoginDialog}
              >
                &times;
              </div>
            </div>
            <LoginPage />
          </div>
        </div>
      )} */}
    </div>
  );
};
