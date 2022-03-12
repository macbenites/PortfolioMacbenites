import { useState } from 'react';
import NavItem from '@components/NavItem';
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme);
  };

  let [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header className="w-full z-50 sticky top-0  bg-white dark:bg-black/50 dark:backdrop-blur-lg">
      <nav className="py-4">
        <div className="flex flex-col px-4 mx-auto max-w-screen-xl md:px-6 md:flex-row md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div className="font-bold text-2xl cursor-pointer flex items-center text-black dark:text-white">
              <span className="text-3xl text-indigo-600 mr-1 pt-2">
                <ion-icon name="logo-ionic"></ion-icon>
              </span>
              MacBenites
            </div>
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={changeTheme}
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              </button>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="fill-sky-400/20 stroke-sky-500"></path>
                <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-sky-500"></path>
              </svg>
              <button
                className="ml-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                onClick={handleClick}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                  onClick={changeTheme}
                  className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
