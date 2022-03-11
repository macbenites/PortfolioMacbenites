import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export const Project = ({ id, title, description, image, technologies, repository, link }) => {
  return (
    <div className="flex flex-col md:flex-row mb-10 gap-6 my-14" key={id}>
      <div className="w-full md:w-2/3">
        <h3 className="text-2xl font-semibold text-black dark:text-white">{title}</h3>
        <p className="text-base font-sans text-gray-500 mt-8">{description}</p>
        <div className="flex gap-3 flex-wrap my-8">
          {technologies.map((technology) => (
            <span className="inline-block bg-black dark:bg-white rounded-full px-3 py-2 text-sm font-semibold text-white dark:text-black">{technology}</span>
          ))}
        </div>
        <div className="flex gap-3">
          <a href={repository} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size={'lg'} />
          </a>
          <a href={link} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={'lg'} />
          </a>
        </div>
      </div>
      <Image src={image} alt={title} width={600} height={300} className="rounded-xl shadow-lg opacity-80 hover:opacity-100 transition-all duration-700 ease-in-out " />
    </div>
  );
};

export default Project;
