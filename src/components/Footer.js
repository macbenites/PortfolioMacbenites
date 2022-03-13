import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { socialMedia } from '../../public/data/projects';

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-4 my-4">
      <div className=" font-mono font-bold text-2xl cursor-pointer flex items-center fill-slate-600 text-black dark:text-white py-4">
        {' '}
        <Link href="/">
          <a>&lt;Macbenites &frasl;&gt;</a>
        </Link>
      </div>
      <div className="flex flex-col-reverse border-t gap-3 border-gray-300 dark:border-gray-500  pt-8 sm:flex-row sm:justify-between">
        <div className="text-gray-500 flex justify-center">
          <small className="m-auto mt-4">© {new Date().getFullYear()} Made with ❤️ by Marlon Acosta</small>
        </div>
        <div className="flex gap-6  justify-center">
          {socialMedia.map((social) => (
            <a href={social.link} target="_blank" rel="noreferrer" className="text-zinc-800 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-white transition-all duration-700 ease-out">
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
