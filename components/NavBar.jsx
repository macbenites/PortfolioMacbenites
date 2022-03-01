export default function NavBar({ children }) {
  return (
    <nav className="hidden lg:block py-4 px-6 text-sm font-medium">
      <ul className="flex space-x-3">{children}</ul>
    </nav>
  );
}
