import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Social = ({ isDarkBackground }) => {
  return (
    <div>
      <div className="social-media flex gap-6 mt-6 text-2xl">
        <a
          href="https://www.linkedin.com/in/rohit-jadhav-8b7a62267/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
          >
          <FaLinkedin
            style={{
              backgroundColor: '#0077B5',
              color: 'white',
              borderRadius: '6px',
              padding: '4px',
            }}
            className="transition-transform duration-300 transform hover:scale-125 hover:text-blue-700"
          />
        </a>
        <a
          href="https://github.com/Rohit-Jadhav-45?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800"
          >
          <FaGithub
            style={{
              color: isDarkBackground ? '#ffffff' : '#181717',
            }}
            className="transition-transform duration-300 transform hover:scale-125 hover:text-blue-700"
          />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800"
          >
          <FaInstagram
            style={{
              background:
                'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
              borderRadius: '6px',
              padding: '4px',
              color: 'white',
            }}
            className="transition-transform duration-300 transform hover:scale-125 hover:text-blue-700"
          />
        </a>
      </div>
    </div>
  );
};

export default Social;
