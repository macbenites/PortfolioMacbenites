import { useState } from "react";
import Image from "next/image";
import NavItem from "./NavItem";

const Header = () => {
  let [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header className="shadow-md w-full fixed top-0 left-0">
      <nav className="md:flex items-center justify-between bg-slate-50 py-6 md:px-6 px-6">
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
          className={`md:flex md:items-center md:max-w-sm md:justify-between md:pb-0 pb-12 absolute md:static bg-slate-50 md:z-auto z-[-1] left-0 w-full md:p-0 px-7 transition-all duration-700 ease-in-out ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <NavItem href="/" onClick={handleClick}>
            Home
          </NavItem>
          <NavItem href="/about" onClick={handleClick}>
            About
          </NavItem>
          <NavItem href="/projects" onClick={handleClick}>
            Projects
          </NavItem>
          <NavItem href="/contact" onClick={handleClick}>
            Contact
          </NavItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
