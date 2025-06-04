import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import Social from '../SocialMedia/Social';
import signature from '../../assets/signature.png';

const LastBioSection = () => {
  return (
    <div className="bg-black text-white py-10">
  <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto px-4 md:px-0 gap-10 md:gap-0">

    {/* TECH STACK */}
    <div className="w-full md:w-1/4 flex flex-col items-center">
  <h3 className="font-semibold mb-4">TECH STACK</h3>
  
  {/* Center this whole block but keep text left-aligned */}
  <div className="text-sm text-gray-300 space-y-3 flex flex-col justify-center text-left max-w-xs ml-12">
    <div>
      <span className="text-white font-medium block">Web Development:</span>
      <span>HTML, CSS, JavaScript, REST APIs</span>
    </div>
    <div>
      <span className="text-white font-medium block">Frameworks & Libraries:</span>
      <span>ReactJS, AngularJS, Node.js, Bootstrap, Tailwind CSS, jQuery, Material UI, Redux</span>
    </div>
    <div>
      <span className="text-white font-medium block">Database:</span>
      <span>MongoDB</span>
    </div>
    <div>
      <span className="text-white font-medium block">Tools:</span>
      <span>VS Code, Eclipse IDE, Postman, Git</span>
    </div>
  </div>
  
  <img src={signature} alt="signature" className="mx-auto md:mx-0 mt-2" />
</div>


    {/* NAVIGATIONS */}
    <div className="w-full md:w-1/4 flex flex-col items-center  text-center">
      <h3 className="font-semibold ">NAVIGATIONS</h3>
      <ul className="space-y-4 mt-4 text-sm text-gray-300">
        <li><a href="#home" className="list_Item !text-white !font-normal">Home</a></li>
        <li><a href="#about" className="list_Item !text-white !font-normal">About</a></li>
        <li><a href="#projects" className="list_Item !text-white !font-normal">Projects</a></li>
        <li><a href="#contact" className="list_Item !text-white !font-normal">Contact</a></li>
        <li><a href="#certifications" className="list_Item !text-white !font-normal">Certifications</a></li>
      </ul>
    </div>

    {/* CONTACT */}
    <div className="w-full md:w-1/4 flex flex-col items-center text-center">
      <h3 className="font-semibold mb-2">CONTACT</h3>
      <div className="flex flex-col space-y-3 mt-4 text-sm text-gray-300">
        <div className="flex items-center justify-center gap-2">
          <FiPhone className="text-white" />
          <span>8668229138</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FiMail className="text-white" />
          <span>rohitjadhavrj483@gmail.com</span>
        </div>
      </div>
    </div>

    {/* SOCIAL */}
    <div className="w-full md:w-1/4 flex flex-col items-center text-center">
      <h3 className="font-semibold mb-2">FOLLOW ME HERE</h3>
      <div className="flex justify-center">
        <Social isDarkBackground={true} />
      </div>
    </div>
  </div>

  <hr className="border-t border-gray-700 w-11/12 mx-auto mt-4" />
  <p className="text-center text-sm text-gray-500 mt-4">
    Always learning, always building — Rohit Jadhav | copyright {new Date().getFullYear()}
  </p>
</div>

  );
};

export default LastBioSection;
