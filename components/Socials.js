import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

export default function Socials() {
  return (
    <div className="flex gap-3">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        aria-label="GitHub"
      >
        <FiGithub className="w-6 h-6" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        aria-label="Twitter"
      >
        <FiTwitter className="w-6 h-6" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        aria-label="LinkedIn"
      >
        <FiLinkedin className="w-6 h-6" />
      </a>
    </div>
  );
}