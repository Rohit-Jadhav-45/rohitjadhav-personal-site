import React from 'react'
import { FaLinkedin, FaGithub,FaInstagram} from 'react-icons/fa';


const Social = () => {
  return (
     <div>
       <div className="social-media flex gap-6 mt-6 text-2xl">
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
        <FaLinkedin   className="transition-transform duration-300 transform hover:scale-125 hover:text-blue-700"/>
      </a>
      <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
        <FaGithub   className="transition-transform duration-300 transform hover:scale-125 hover:text-blue-700"/>
      </a>
       <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
        <FaInstagram   className="transition-transform duration-300 transform hover:scale-125 hover:text-blue-700"/>
      </a>
    </div>
    </div>
  )
}

export default Social
