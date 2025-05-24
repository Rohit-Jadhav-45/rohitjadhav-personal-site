import React from 'react';
import QuizLottie from '../../assets/QuizLottie.json';
import ldmsLottie from '../../assets/ldmsLottie.json';
import Ecommerce from '../../assets/Ecommerce.json';
import HRMS from '../../assets/HRMS.json';
import Lottie from 'lottie-react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] pt-0.5 min-h-screen px-4 md:px-10">
      <div>
        <h2 className='text-2xl font-bold flex justify-center pt-5 pb-2 mt-2'>PROJECTS</h2>
      </div>

      <div className='flex flex-col md:flex-row mt-3 gap-8'>
        {/* Left Column */}
        <div className='w-full md:w-1/2'>
          <h3 className='text-[14px] md:text-2xl lg:text-3xl font-bold flex justify-center'>Quiz Application</h3>
          <div className='px-4 mt-2 text-sm text-justify'>
            A feature-rich web-based quiz platform designed for skill-based assessments. It features a powerful Admin panel to create quizzes with question types like MCQs, subjective, coding challenges, and drag-and-drop. Admins can set timers and enable cheating prevention by restricting tab switching.

            The SME (Subject Matter Expert) side allows experts to review quiz papers and assign marks to users. The user interface is clean, with a question palette for easy navigation, progress tracking, and smooth transitions. Ideal for educational institutions and training platforms needing secure, interactive assessments.
          </div>
          <div className="w-full flex justify-center mt-5">
            <Lottie animationData={QuizLottie} className="w-[90%] max-w-md" />
          </div>

          <h3 className='text-[14px] whitespace-nowrap md:text-2xl lg:text-3xl font-bold flex justify-center mt-20'>Human Resource Management System</h3>
          <div className='px-4 mt-2 text-sm text-justify'>
            A comprehensive web-based application designed to streamline and automate HR processes such as employee management, attendance tracking, leave requests, payroll processing, and performance evaluation. This system improves organizational efficiency by centralizing HR data and offering user-friendly interfaces for both HR administrators and employees.
          </div>
          <div className="w-full flex justify-center mt-5">
            <Lottie animationData={HRMS} className="w-[90%] max-w-md" />
          </div>
        </div>

        {/* Vertical Line (hidden on small screens) */}
        <div className='hidden md:block w-[2px] bg-gray-400'></div>

        {/* Right Column */}
        <div className='w-full md:w-1/2'>
          <div className="w-full flex justify-center mt-2">
            <Lottie animationData={ldmsLottie} className="w-[90%] max-w-md" />
          </div>
          <h3 className='text-[14px]  whitespace-nowrap md:whitespace-normal md:text-2xl lg:text-3xl font-bold flex justify-center mt-4'>Learning And Development Management System</h3>
          <div className='px-4 mt-2 text-sm text-justify'>
            A feature-rich web-based quiz platform designed for skill-based assessments. It features a powerful Admin panel to create quizzes with question types like MCQs, subjective, coding challenges, and drag-and-drop. Admins can set timers and enable cheating prevention by restricting tab switching.

            The SME (Subject Matter Expert) side allows experts to review quiz papers and assign marks to users. The user interface is clean, with a question palette for easy navigation, progress tracking, and smooth transitions. Ideal for educational institutions and training platforms needing secure, interactive assessments.
          </div>

          <div className="w-full flex justify-center mt-5">
            <Lottie animationData={Ecommerce} className="w-[90%] max-w-md" />
          </div>
          <h3 className='text-[14px] md:text-2xl lg:text-3xl font-bold flex justify-center mt-4'>E-Commerce Website (React)</h3>
          <div className='px-4 mt-2 text-sm text-justify'>
            A dynamic and responsive e-commerce platform built using React, featuring product listings, shopping cart functionality, user authentication, order management, and secure checkout. The application delivers a seamless user experience with real-time updates, reusable components, and efficient state management.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
