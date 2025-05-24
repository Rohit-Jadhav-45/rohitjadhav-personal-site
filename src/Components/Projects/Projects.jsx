import React from 'react';
import LDMS from '../../assets/LDMS.png'
import Quiz from '../../assets/QUIZ.png'
import './Projects.css';


const Projects = () => {
  return (
    <div className="bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] pt-0.5 min-h-screen px-4 md:px-10">
  <div>
    <h2 className="text-2xl font-bold flex justify-center pt-5 pb-8 mt-1">PROJECTS</h2>
  </div>

  <div className="space-y-10">
    {/* Quiz Application */}
    <div className="projects_SubContainer flex flex-col md:flex-row  gap-8 px-2 md:px-6 py-4">
      <div className="w-full md:w-1/2 space-y-4">
      <h3 className="text-xl font-semibold text-center">Quiz Application</h3>
        <div className="flex justify-center items-center">
        <span className="text-justify leading-relaxed">
          A feature-rich web-based quiz platform designed for skill-based assessments. It features a powerful Admin panel to create quizzes with question types like MCQs, subjective, coding challenges, and drag-and-drop. Admins can set timers and enable cheating prevention by restricting tab switching.
          <br /><br />
          The SME (Subject Matter Expert) side allows experts to review quiz papers and assign marks to users. The user interface is clean, with a question palette for easy navigation, progress tracking, and smooth transitions. Ideal for educational institutions and training platforms needing secure, interactive assessments.
        </span>
         </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={Quiz} alt="Quiz Application" className="max-w-full" />
      </div>
    </div>

    {/* LDMS Project */}
    <div className="projects_SubContainer flex flex-col md:flex-row items-center gap-8 px-2 md:px-6 py-4">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={LDMS} alt="Learning and Development Management System" className="max-w-full" />
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <div className="flex justify-center">
          <h3 className="text-xl font-semibold text-center">Learning & Development Management System</h3>
        </div>
       <span className="text-justify leading-relaxed">
  A comprehensive Learning & Development Management System that enables users to enroll in courses, access video content, and complete assessments. It includes progress tracking, timed quizzes, certification on completion, and an admin panel for managing users, courses, and analytics—ideal for corporate training and educational platforms.
</span>

      </div>
    </div>
  </div>
</div>

  );
};

export default Projects;
