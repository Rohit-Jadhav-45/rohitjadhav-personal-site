import React, { useEffect, useRef, useState } from 'react';
import CertificateView from './CertificateView';
import courseraLEI from '../../assets/LEI.png'
import workSmarter from '../../assets/WorkSmarter.png'
import './Certification.css';

const Certifications = () => {
  const cardRefs = useRef([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificationsData = [
    {
      title: 'MERN Stack developer',
      provider: 'Systems & Network Technologies, Pune',
      year: 'Mar 2023',
      image:''
    },
    {
      title: 'Web Development',
      provider: 'TechnoLearn Trainings, Pune',
      year: 'Nov 2022',
      image:''
    },
    {
      title: 'Leadership And Emotional Intelligence',
      provider: 'Coursera',
      year: 'Jul 2021',
      image:courseraLEI
    },
    {
      title: 'Work Smarter Not Harder',
      provider: 'Coursera',
      year: 'Jul 2021',
      image:workSmarter
    },
  ];

 const cardColors = [
  'bg-rose-100 text-rose-800 border-rose-300',
  'bg-indigo-100 text-indigo-800 border-indigo-300',
  'bg-slate-100 text-slate-800 border-slate-300',
  'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300',
  'bg-amber-100 text-amber-800 border-amber-300',
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


  // Certificate Click Handler

  const handleCertificateClick =(cert)=>{
           setSelectedCertificate(cert)
           setShowModal(true);
  }

  const closeModal = () =>{
           setShowModal(false);
           setSelectedCertificate(null)
  }

   

  return (
    <div className="bg-gradient-to-br from-rose-50 via-slate-50 to-rose-100 px-4 py-6">
      <h2 className="text-2xl font-bold flex justify-center items-center mb-6 text-gray-800">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {certificationsData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`certification_Details p-4 border rounded-lg shadow-sm h-auto ${cardColors[index % cardColors.length]}`}
            onClick={()=>handleCertificateClick(item)}
          >
            <h3 className="text-xl font-medium">{item.title}</h3>
            <p className="text-gray-600 mt-1">{item.provider}</p>
            <p className="text-sm text-gray-500 mt-1">{item.year}</p>
          </div>
        ))}
      </div>
      <CertificateView
         showModal={showModal}
         certificate={selectedCertificate}
         onClose={closeModal}
      />
    </div>
  );
};

export default Certifications;
