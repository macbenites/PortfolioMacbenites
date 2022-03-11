import Link from 'next/link';

const NavItem = ({ href, children, active, onClick }) => {
  return (
    <li className="mb-3 md:px-6 md:mb-0">
      <Link href={href}>
        <a className="font-medium text-md hover:text-black text-gray-500 dark:hover:text-white" onClick={onClick}>
          {children}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
