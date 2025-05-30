import React from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
const CertificateView = ({ showModal, certificate, onClose }) => {
  if (!showModal || !certificate) return null;

  const isPDF = certificate.image?.toLowerCase().endsWith('.pdf');

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-4 sm:p-6 w-[90%] sm:w-full max-w-[90%] sm:max-w-lg relative shadow-lg">
    <button
        className="absolute top-2 right-1 text-2xl sm:text-3xl md:text-10xl"
        style={{ background: 'none', boxShadow: 'none', outline: 'none', border: 'none' }}
        onClick={onClose}
        >
          <IoMdCloseCircleOutline className='text-2xl sm:text-3xl md:text-10xl'/>
        </button>
        <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
        <p className="text-gray-700 mb-1">{certificate.provider}</p>
        <p className="text-gray-500 mb-4">{certificate.year}</p>

        {certificate.image && !isPDF ? (
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-auto rounded"
          />
        ) : (
          <p className="text-gray-400">No Certificate preview available.</p>
        )}
      </div>
    </div>
  );
};

export default CertificateView;
