import React from 'react';
import LDMS from '../../assets/LDMS.png'
import Quiz from '../../assets/QUIZ.png'
import Ecommerce from '../../assets/Ecommerce.png'
import HRMS from '../../assets/HRMS.png'
import './Projects.css';


const Projects = () => {
  return (
  <div className="bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] pt-0.5 min-h-screen px-4 md:px-10">
  <div>
    <h2 className="text-2xl font-bold flex justify-center pt-4 pb-4 mt-1 text-gray-800">PROJECTS</h2>
  </div>

  <div className="space-y-10">
    {/* Quiz Application */}
    <div className="projects_SubContainer flex flex-col md:flex-row gap-8 px-2 md:px-6 py-4">
      <div className="w-full md:w-1/2 space-y-4 order-1">
        <h3 className="text-base md:text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Quiz Application</h3>
        <div className="flex justify-center items-center">
          <span className="text-justify leading-relaxed text-gray-800">
            A feature-rich web-based quiz platform designed for skill-based assessments. It features a powerful Admin panel to create quizzes with question types like MCQs, subjective, coding challenges, and drag-and-drop. Admins can set timers and enable cheating prevention by restricting tab switching.
            <br /><br />
            The SME (Subject Matter Expert) side allows experts to review quiz papers and assign marks to users. The user interface is clean, with a question palette for easy navigation, progress tracking, and smooth transitions. Ideal for educational institutions and training platforms needing secure, interactive assessments.
          </span>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center order-2">
        <img src={Quiz} alt="Quiz Application" className="max-w-full" />
      </div>
    </div>

    {/* LDMS Project */}
    <div className="projects_SubContainer flex flex-col md:flex-row items-center gap-8 px-2 md:px-6 py-4">
      <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
        <img src={LDMS} alt="Learning and Development Management System" className="max-w-full" />
      </div>
      <div className="w-full md:w-1/2 space-y-4 order-1 md:order-2">
        <div className="flex justify-center">
          <h3 className="text-base md:text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Learning AND Development Management System</h3>
        </div>
        <span className="text-justify leading-relaxed text-gray-800">
          A comprehensive Learning & Development Management System that enables users to enroll in courses, access video content, and complete assessments. It includes progress tracking, timed quizzes, certification on completion, and an admin panel for managing users, courses, and analytics—ideal for corporate training and educational platforms.
        </span>
      </div>
    </div>

    {/* E-commerce Website */}
    <div className="projects_SubContainer flex flex-col md:flex-row items-center gap-8 px-2 md:px-6 py-4">
      <div className="w-full md:w-1/2 space-y-4 order-1">
        <div className="flex justify-center">
          <h3 className="text-base md:text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">E-commerce Website</h3>
        </div>
        <span className="text-justify leading-relaxed text-gray-800">
          Developed a responsive e-commerce website featuring product listings, dynamic search, cart functionality, and secure checkout. Integrated user authentication, order management, and a clean UI to enhance user experience.
        </span>
      </div>
      <div className="w-full md:w-1/2 flex justify-center order-2">
        <img src={Ecommerce} alt="E-commerce Website" className="max-w-full" />
      </div>
    </div>

    {/* HRMS */}
    <div className="projects_SubContainer flex flex-col md:flex-row items-center gap-8 px-2 md:px-6 py-4">
      <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
        <img src={HRMS} alt="Human Resource Management System" className="max-w-full" />
      </div>
      <div className="w-full md:w-1/2 space-y-4 order-1 md:order-2">
        <div className="flex justify-center">
          <h3 className="text-base md:text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Human Resource Management System</h3>
        </div>
        <span className="text-justify leading-relaxed text-gray-800">
          Designed and developed a web-based HRMS to manage employee records, attendance, leave requests, and payroll processing. Included admin and employee dashboards with role-based access. Streamlined HR workflows using an intuitive UI and secure data handling.
        </span>
      </div>
    </div>
  </div>
</div>


  );
};

export default Projects;
