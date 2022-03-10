import Link from 'next/link';

const NavItem = ({ href, children, active, onClick }) => {
  return (
    <li className="mb-3 md:px-6 md:mb-0">
      <Link href={href}>
        <a className="font-medium text-md text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500" onClick={onClick}>
          {children}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
