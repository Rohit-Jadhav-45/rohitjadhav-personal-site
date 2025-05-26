import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import Social from '../SocialMedia/Social';
import signature from '../../assets/signature.png';

const LastBioSection = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="flex flex-col md:flex-row justify-between text-center max-w-6xl mx-auto px-4 md:px-0 gap-10 md:gap-0">
        <div className="w-full md:w-1/4">
          <h3 className="font-semibold mb-2">ABOUT ME</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            I'm a passionate frontend developer skilled in React and JavaScript. I love building responsive, user-friendly interfaces and am always eager to learn and grow in the tech world.
          </p>
          <img src={signature} alt="" className="mx-auto md:mx-0" />
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="font-semibold mb-2">NAVIGATIONS</h3>
          <ul className="space-y-4 mt-4">
            <li><a href="#home" className="list_Item !text-white !font-normal">Home</a></li>
            <li><a href="#about" className="list_Item !text-white !font-normal">About</a></li>
            <li><a href="#projects" className="list_Item !text-white !font-normal">Projects</a></li>
            <li><a href="#contact" className="list_Item !text-white !font-normal">Contact</a></li>
            <li><a href="#certifications" className="list_Item !text-white !font-normal">Certifications</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="font-semibold mb-2 text-center md:text-left">CONTACT</h3>
          <div className="flex flex-col items-center md:items-start space-y-3 mt-4">
            <div className="flex items-center gap-2">
              <FiPhone className="text-white" />
              <span className="text-sm text-gray-300">8668229138</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-white" />
              <span className="text-sm text-gray-300">rohitjadhavrj483@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="font-semibold mb-2">FOLLOW ME HERE</h3>
          <div className="flex justify-center md:justify-center">
            <Social isDarkBackground={true} />
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-700 mt-10 w-11/12 mx-auto" />
      <p className="text-center text-sm text-gray-500 mt-4">
        Always learning, always building — Rohit Jadhav | copyright {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default LastBioSection;
