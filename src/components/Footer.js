import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import { socialMedia } from '../../public/data/projects';

export default function Footer() {
  return (
    <footer className="px-6 py-4 dark:bg-dark-700">
      <div className="flex flex-col-reverse  sm:flex-row sm:justify-between">
        <div className="text-gray-500 flex justify-center">
          <small className="m-auto mt-4">© {new Date().getFullYear()} Made with ❤️ by Marlon Acosta</small>
        </div>
        <div className="flex gap-6  justify-center">
          {socialMedia.map((social) => (
            <a href={social.link} target="_blank" rel="noreferrer" className="text-black hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-white transition-all duration-700 ease-out">
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
