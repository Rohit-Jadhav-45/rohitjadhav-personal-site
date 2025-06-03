import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';
import './Dashboard.css';
import Social from '../SocialMedia/Social';
import Media from '../../assets/Media.jpg'


const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="intro_Container flex flex-col md:flex-row w-full bg-stone-100 pt-0 pr-4 pb-4 pl-0 md:pt-0 md:pr-10 md:pb-10 md:pl-0 mt-12 justify-center">


        {/* Image First on Mobile, Second on Desktop */}
        <div className="intro_Image md:w-1/2 max-w-sm mx-auto md:mx-0 bg-zoom-animation order-1 md:order-2">
          <img
            src={Media}
            alt="Intro"
           className="w-full max-w-sm h-auto object-contain mx-2"
          />
        </div>

        {/* Text Second on Mobile, First on Desktop */}
        <div className="intro_Text w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0 order-2 md:order-1">
          <div className="introActual_Content mt-5">
            <h2 className="text-3xl font-bold fade-in-up text-center md:text-left">HELLO, I'M ROHIT.</h2>
            <h2 className="text-2xl font-bold fade-in-up text-center md:text-left">NICE TO MEET YOU!</h2>
            <p className="mt-4 fade-in-up text-justify text-sm md:text-base px-4 md:px-0">
              I'm a software developer with a passion for creating responsive and user-friendly web interfaces using React,
              JavaScript, HTML, and CSS. I love solving complex problems with clean, efficient UI solutions. I'm now expanding
              my knowledge by exploring backend technologies like Node.js.
            </p>
            <div className="mt-4 flex justify-center md:justify-start">
              <Social isDarkBackground={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
