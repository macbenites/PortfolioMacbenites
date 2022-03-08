import { useState } from "react";
import NavItem from "./NavItem";

const Header = () => {
  let [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header>
      <nav className="py-4 w-full bg-white dark:bg-gray-900 shadow-lg">
        <div className="flex flex-col px-4 mx-auto max-w-screen-xl md:px-6 md:flex-row md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
              <span className="text-3xl text-indigo-600 mr-1 pt-2">
                <ion-icon name="logo-ionic"></ion-icon>
              </span>
              MacBenites
            </div>
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              </button>
              <button
                className="ml-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                onClick={handleClick}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <ul className="hidden md:flex md:flex-row md:self-center pt-6 pb-3 md:py-0">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/projects">Projects</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </ul>
          {open && (
            <ul className="md:hidden flex flex-col md:flex-row md:self-center pt-6 pb-3 md:py-0">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/about">About</NavItem>
              <NavItem href="/projects">Projects</NavItem>
              <NavItem href="/contact">Contact</NavItem>
            </ul>
          )}

          <div className="lg:self-center flex items-center mb-4 md:mb-0 collapse false">
            <div className="hidden mr-3 md:block">
              <div>
                <button
                  type="button"
                  className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* {open ? <SideMenu /> : ""} */}
      </nav>
    </header>
  );
};

const SideMenu = () => {
  return (
    <div className="fixed left-0 top-20 w-2/3 sm:w-2/4 z-10 md:hidden shadow-lg">
      <ul className="flex flex-col text-lg bg-white font-bold h-screen px-6">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </ul>
    </div>
  );
};

export default Header;
