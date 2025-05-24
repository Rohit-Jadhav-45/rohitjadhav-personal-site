import React, { useEffect, useRef } from 'react';
import './Certification.css';

const Certifications = () => {
  const cardRefs = useRef([]);

  const certificationsData = [
    {
      title: 'MERN Stack developer',
      provider: 'Systems & Network Technologies, Pune',
      year: 'Mar 2023',
    },
    {
      title: 'Web Development',
      provider: 'TechnoLearn Trainings, Pune',
      year: 'Nov 2022',
    },
    {
      title: 'Leadership And Emotional Intelligence',
      provider: 'Coursera',
      year: 'Jul 2021',
    },
    {
      title: 'Work Smarter Not Harder',
      provider: 'Coursera',
      year: 'Jul 2021',
    },
  ];

  const cardColors = [
    'bg-blue-100 text-blue-800 border-blue-300',
    'bg-green-100 text-green-800 border-green-300',
    'bg-yellow-100 text-yellow-800 border-yellow-300',
    'bg-purple-100 text-purple-800 border-purple-300',
    'bg-pink-100 text-pink-800 border-pink-300',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-pink-100 via-red-100 to-yellow-100 px-4 py-6">
      <h2 className="text-2xl font-bold flex justify-center items-center mb-6">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {certificationsData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`certification_Details p-4 border rounded-lg shadow-sm h-auto ${cardColors[index % cardColors.length]}`}
          >
            <h3 className="text-xl font-medium">{item.title}</h3>
            <p className="text-gray-600 mt-1">{item.provider}</p>
            <p className="text-sm text-gray-500 mt-1">{item.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
