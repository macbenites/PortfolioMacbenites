import { useState } from "react";
import Image from "next/image";
import NavItem from "./NavItem";

const Header = () => {
  let [open, setOpen] = useState(false);

  // const HideScrollbar = (open) => {
  //   document.body.className = !open ? "overflow-hidden" : "overflow-auto";
  // };

  const handleClick = () => {
    // HideScrollbar(open);
    setOpen(!open);
  };

  return (
    <header className="shadow-md w-full sticky top-0 left-0 bg-white z-10">
      <nav className="flex items-center justify-between py-6 md:px-6 px-6 transition-all duration-700 ease-in-out">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          MacBenites
        </div>
        <div
          onClick={handleClick}
          className="absolute right-5 top-5 cursor-pointer md:hidden"
        >
          {open ? (
            <Image
              src={"/image/close.svg"}
              alt="Close"
              width={40}
              height={40}
            />
          ) : (
            <Image
              src={"/image/burger-menu.svg"}
              alt="Burger Menu"
              width={40}
              height={40}
            />
          )}
        </div>
        <ul
          className={`hidden md:flex md:justify-between bg-white md:max-w-md md:w-full transition-all duration-700 ease-in-out`}
        >
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </ul>
        {open ? <SideMenu /> : ""}
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
