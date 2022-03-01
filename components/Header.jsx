import { useState } from "react";
import NavBar from "./NavBar";
import NavItem from "./NavItem";
import Image from "next/image";

export default function Header() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <header className="flex px-6 items-center justify-between bg-slate-50 shadow-lg">
      <h2>MarlonMax</h2>
      <div className="flex lg:hidden py-4 px-6">
        <Image
          src="/image/burger-menu.svg"
          alt="Menu"
          width={30}
          height={30}
          onClick={handleClick}
        />
      </div>
      <NavBar>
        <NavItem active href="/">
          Home
        </NavItem>
        <NavItem href="/about">About Us</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </NavBar>
    </header>
  );
}
