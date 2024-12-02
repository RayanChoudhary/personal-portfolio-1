import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center px-4">
        
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/RayanChoudhary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-rayan-063815218"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/Rayansanghera?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebook size={24} />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-4 mb-4 text-sm sm:text-base">
          <a href="/About" className="hover:text-gray-400">
            About
          </a>
          <a href="/Portfolio" className="hover:text-gray-400">
            Portfolio
          </a>
          <a href="/Contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Rayan Choudhary. All rights reserved.
        </p>
      </div>
    </footer>
  );
}