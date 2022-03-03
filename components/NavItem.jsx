import Link from "next/link";

const NavItem = ({ href, children, active, onClick }) => {
  return (
    <li
      className={`md:my-0 my-3 md:py-2 py-4 hover:text-orange-400 text-gray-800 transition-colors ${
        active && "text-orange-500"
      }`}
    >
      <Link href={href}>
        <a className="py-2 font-medium text-lg duration-500" onClick={onClick}>
          {children}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
