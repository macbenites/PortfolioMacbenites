import { useState } from 'react';
import NavItem from '@components/NavItem';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Header = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  let [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header className="w-full sticky top-0 z-10 bg-white dark:bg-black">
      <div className="flex  justify-between px-4 mx-auto max-w-screen-xl md:px-6 items-center p-4">
        <div className="flex w-full md:w-auto justify-between">
          <div className="font-mono font-bold text-2xl cursor-pointer flex items-center fill-slate-600 text-black dark:text-white">
            <Link href="/">
              <a>&lt;Macbenites &frasl;&gt;</a>
            </Link>
          </div>
          <div className="flex gap-3 items-center md:hidden">
            <button
              type="button"
              onClick={changeTheme}
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-200 focus:outline-none dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
            >
              {theme === 'light' ? <FontAwesomeIcon icon={faMoon} size="xl" title="Dark" /> : <FontAwesomeIcon icon={faSun} size="xl" title="Light" />}
            </button>
            <button
              className="w-10 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-200 focus:outline-none dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center justify-center"
              onClick={handleClick}
            >
              {!open ? <FontAwesomeIcon icon={faBars} size="xl" title="Menu" /> : <FontAwesomeIcon icon={faXmark} size="xl" title="Close" />}
            </button>
          </div>
        </div>

        <ul className="hidden md:flex md:flex-row md:self-center pt-6 pb-3 md:py-0">
          <NavItem href="/">Inicio</NavItem>
          <NavItem href="/about">Sobre Mi</NavItem>
          <NavItem href="/projects">Proyectos</NavItem>
          <NavItem href="/contact">Contacto</NavItem>
        </ul>
        {open && (
          <ul className="md:hidden w-full flex flex-col fixed top-17 left-0 z-10 bg-white dark:bg-black py-7">
            <NavItem href="/">Inicio</NavItem>
            <NavItem href="/about">Sobre Mi</NavItem>
            <NavItem href="/projects">Proyectos</NavItem>
            <NavItem href="/contact">Contacto</NavItem>
          </ul>
        )}

        <div className="lg:self-center flex items-center md:mb-0">
          <div className="hidden mr-3 md:block">
            <div>
              <button
                type="button"
                onClick={changeTheme}
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-200 focus:outline-none dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
              >
                {theme === 'light' ? <FontAwesomeIcon icon={faMoon} size="xl" title="Dark" /> : <FontAwesomeIcon icon={faSun} size="xl" title="Light" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
