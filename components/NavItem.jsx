import Link from "next/link";
export default function NavItem({ href, children, active }) {
  return (
    <li
      className={`flex items-center hover:bg-orange-400 rounded hover:text-white text-gray-800 transition-colors ${
        active && "text-orange-500"
      }`}
    >
      <Link href={href}>
        <a className="px-3 py-2 font-semibold text-base">{children}</a>
      </Link>
    </li>
  );
}
