import { Link, Button } from "@nextui-org/react";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "../login/login";
import { useRouter } from "next/router";

// export const headerHeight = 70;

// export const NavBar = ({
//   changeLoginDialogStatus,
// }: {
//   changeLoginDialogStatus: () => void;
// }) => {
//   const handleLoginButtonClick = () => {
//     changeLoginDialogStatus();
//   };

//   // Navbar active item
//   const [activeItem, setActiveItem] = useState(0);

//   // Login dialog
//   const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

//   // Define your custom border bottom shadow
//   const shadowStyle = {
//     boxShadow: "0 5px 5px rgba(255, 255, 255, 0.5)",
//   };

//   const router = useRouter();

//   // Open & Close login dialog
//   const openLoginDialog = () => {
//     setIsLoginDialogOpen(true);
//     changeLoginDialogStatus();
//   };

//   const closeLoginDialog = () => {
//     setIsLoginDialogOpen(false);
//   };

//   return (
//     // If want stick at top when scroll also, add "sticky" in classname
//     <div
//       className={`z-50 text-white bg-gray-900 shadow-xl pl-0 md:pl-10 top-0 shadow-xl h-[${headerHeight}px] md:h-auto md:relative }`}
//       style={shadowStyle}
//     >
//       <Navbar
//         classNames={{
//           item: [
//             "flex",
//             "relative",
//             "h-full",
//             "items-center",
//             "px-1",
//             "md:px-4",
//             "py-4",
//             "data-[active=true]:after:absolute",
//             "data-[active=true]:after:text-teal-300",
//             "data-[active=true]:after:bottom-0",
//             "data-[active=true]:after:left-0",
//             "data-[active=true]:after:right-0",
//             "data-[active=true]:after:h-[2px]",
//             "data-[active=true]:after:rounded-[3px]",
//             "data-[active=true]:after:bg-teal-500",
//           ],
//         }}
//       >
//         <div className="flex items-center space-x-2.5">
//           <div className="font-bold text-lg md:text-xl text-inherit cursor-default">
//             Hana Studio
//           </div>
//         </div>
//         <NavbarContent className="flex items-center max-w-full ">
//           <NavbarItem
//             isActive={activeItem === 0}
//             className={`hover:text-teal-500 text-base md:text-lg ${
//               activeItem === 0
//                 ? "text-teal-500 font-medium leading-6 outline-none"
//                 : "text-white"
//             }`}
//           >
//             <Link
//               href="/"
//               aria-current="page"
//               className="nav-link"
//               onClick={() => {
//                 setActiveItem(0);
//               }}
//             >
//               Home
//             </Link>
//           </NavbarItem>
//           <NavbarItem
//             isActive={activeItem === 1}
//             className={`"hover:text-teal-500 text-base md:text-lg ${
//               activeItem === 1
//                 ? "text-teal-500 font-medium leading-6 outline-none"
//                 : "text-white"
//             }`}
//           >
//             <Link
//               className="hover:text-teal-500"
//               href="/roadmap"
//               aria-current="page"
//               onClick={() => setActiveItem(1)}
//             >
//               Roadmap
//             </Link>
//           </NavbarItem>
//           <NavbarItem
//             isActive={activeItem === 2}
//             className={`"hover:text-teal-500 text-base md:text-lg ${
//               activeItem === 2
//                 ? "text-teal-500 font-medium leading-6 outline-none"
//                 : "text-white"
//             }`}
//           >
//             <Link
//               onClick={() => setActiveItem(2)}
//               className="hover:text-teal-500"
//               aria-current="page"
//               href="/forum"
//             >
//               Forum
//             </Link>
//           </NavbarItem>
//           <NavbarItem
//             isActive={activeItem === 3}
//             className={`"hover:text-teal-500 text-base md:text-lg ${
//               activeItem === 3
//                 ? "text-teal-500 font-medium leading-6 outline-none"
//                 : "text-white"
//             }`}
//           >
//             <Link
//               className="hover:text-teal-500"
//               href="/error?errorCode=404"
//               onClick={() => setActiveItem(3)}
//             >
//               FAQ
//             </Link>
//           </NavbarItem>
//         </NavbarContent>
//         <NavbarContent justify="end">
//           <NavbarItem>
//             <LoginPage />
//           </NavbarItem>
//         </NavbarContent>
//       </Navbar>
//     </div>
//   );
// };

interface NavBarProps {
  activeItemIndex?: number;
}

const NavBar: React.FC<NavBarProps> = ({ activeItemIndex = 0 }) => {
  const headerHeight = 64; // Set your desired header height

  // Navbar active item
  const [activeItem, setActiveItem] = useState(activeItemIndex);

  // Mobile hamburger menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Define your custom border bottom shadow
  const shadowStyle = {
    // boxShadow: "0 3px 3px rgba(255, 255, 255, 0.1)",
  };

  const router = useRouter();

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`z-50 text-white bg-gray-900 shadow-xl pl-0 md:pl-10 top-0 shadow-xl h-[${headerHeight}px] md:h-auto md:relative }`}
      style={shadowStyle}
    >
      <Navbar
        classNames={{
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "px-1",
            "md:px-4",
            "py-4",
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
          <div className="font-bold text-lg md:text-xl text-inherit cursor-default">
            Hana Studio
          </div>
        </div>

        {/* Navbar items for desktop view */}
        <NavbarContent className="hidden md:flex items-center max-w-full">
          <NavbarItem
            isActive={activeItem === 0}
            className={`hover:text-teal-500 text-base md:text-lg ${
              activeItem === 0
                ? "text-teal-500 font-medium leading-6 outline-none"
                : "text-white"
            }`}
          >
            <Link
              href="/"
              aria-current="page"
              className="nav-link"
              onClick={() => {
                setActiveItem(0);
              }}
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem
            isActive={activeItem === 1}
            className={`"hover:text-teal-500 text-base md:text-lg ${
              activeItem === 1
                ? "text-teal-500 font-medium leading-6 outline-none"
                : "text-white"
            }`}
          >
            <Link
              className="hover:text-teal-500"
              href="/roadmap"
              aria-current="page"
              onClick={() => setActiveItem(1)}
            >
              Roadmap
            </Link>
          </NavbarItem>
          <NavbarItem
            isActive={activeItem === 2}
            className={`"hover:text-teal-500 text-base md:text-lg ${
              activeItem === 2
                ? "text-teal-500 font-medium leading-6 outline-none"
                : "text-white"
            }`}
          >
            <Link
              onClick={() => setActiveItem(2)}
              className="hover:text-teal-500"
              aria-current="page"
              href="/forum"
            >
              Forum
            </Link>
          </NavbarItem>
          <NavbarItem
            isActive={activeItem === 3}
            className={`"hover:text-teal-500 text-base md:text-lg ${
              activeItem === 3
                ? "text-teal-500 font-medium leading-6 outline-none"
                : "text-white"
            }`}
          >
            <Link
              className="hover:text-teal-500"
              href="/error?errorCode=404"
              onClick={() => setActiveItem(3)}
            >
              FAQ
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <LoginPage />
          </NavbarItem>
          {/* Navbar items for mobile view */}
          <div className="md:hidden">
            <button
              onClick={() => {
                toggleMobileMenu();
              }}
              className="text-white p-2 focus:outline-none"
            >
              {/* Hamburger icon or any other icon for the mobile menu */}
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </NavbarContent>

        {/* Menu box */}
        {isMobileMenuOpen && (
          <div className="absolute top-0 right-0 mt-12 mr-4 p-4 bg-white shadow-lg rounded">
            {/* Menu content */}
            <NavbarContent className="flex flex-col items-end">
              <NavbarItem
                isActive={activeItem === 0}
                className="hover:text-teal-500 text-base md:text-lg"
              >
                <Link
                  href="/"
                  aria-current="page"
                  className="nav-link"
                  onClick={() => setActiveItem(0)}
                >
                  Home
                </Link>
              </NavbarItem>
              {/* Add other NavbarItems as needed */}
            </NavbarContent>
          </div>
        )}
      </Navbar>
    </div>
  );
};

export default NavBar;
