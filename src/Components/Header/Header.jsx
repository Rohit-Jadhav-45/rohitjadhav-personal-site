import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
   <div className="header_Main bg-purple-100 shadow-md border-b border-purple-300 w-full fixed top-0 z-50 px-6 py-4 flex items-center justify-between">
<div className="text-xs sm:text-sm md:text-base font-medium text-left w-full pl-4 sm:pl-6 md:pl-10 whitespace-nowrap bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
  Living life on the edge of technology.
</div>

 
      {/* Desktop Nav */}
      <div className='hidden md:flex header_List'>
        <ul className='text-lg'>
          <li><a href="#home" className="list_Item !text-purple-900 !font-normal">Home</a></li>
          <li><a href="#about" className="list_Item !text-purple-900 !font-normal">About</a></li>
          <li><a href="#projects" className="list_Item !text-purple-900 !font-normal">Projects</a></li>
          <li><a href="#certifications" className="list_Item !text-purple-900 !font-normal">Certifications</a></li>
          <li><a href="#contact" className="list_Item !text-purple-900 !font-normal">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="flex md:hidden justify-end w-full">
        <button onClick={toggleMenu} className="text-3xl font-bold text-black focus:outline-none">
          ☰
        </button>
      </div>

      {/* Sidebar Overlay */}
      <div className={`mobile_Sidebar md:hidden fixed top-0 right-0 h-full w-[70%] bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-2xl text-black">✕</button>
        </div>
        <ul className="flex flex-col items-center gap-4 mt-8 text-lg">
          <li><a href="#home" onClick={toggleMenu} className="list_Item !text-black">Home</a></li>
          <li><a href="#about" onClick={toggleMenu} className="list_Item !text-black">About</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="list_Item !text-black">Projects</a></li>
          <li><a href="#certifications" onClick={toggleMenu} className="list_Item !text-black">Certifications</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="list_Item !text-black">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
