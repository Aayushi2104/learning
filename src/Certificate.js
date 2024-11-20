// src/Certificate.js
import React from 'react';

const certificates = [
  {
    id: 1,
    type: 'Project Certificate',
    date: "Jun'24 - July'24",
    course: 'Programming using C++',
    issuedDate: '29 Jul 24',
    imageUrl: 'https://cdn-ghkoj.nitrocdn.com/kjYfdEBKRwdYwvHQyjaYBdTGFpFGjqYW/assets/images/optimized/rev-39d8e95/sertifier.com/blog/wp-content/uploads/2020/10/certificate-text-samples.jpg', // Placeholder image URL for the certificate
  },
  {
    id: 2,
    type: 'Training Certificate',
    date: 'July-2024',
    course: 'Programming using C++',
    issuedDate: '29 Jul 24',
    imageUrl: 'https://cdn-ghkoj.nitrocdn.com/kjYfdEBKRwdYwvHQyjaYBdTGFpFGjqYW/assets/images/optimized/rev-39d8e95/sertifier.com/blog/wp-content/uploads/2020/10/certificate-text-samples.jpg', // Placeholder image URL for the certificate
  },
];

const Certificate = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6 text-blue-300">My Certificates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificates.map((cert) => (
          <div key={cert.id} className="bg-gray-800 text-white rounded-lg shadow-md p-4">
            {/* Larger Image box */}
            <div className="flex justify-center mb-4">
              <img
                src={cert.imageUrl}
                alt={`${cert.type} - ${cert.course}`}
                className="w-full h-96 object-cover rounded-md" // Increased height to h-96 for larger display
              />
            </div>
            {/* Certificate details */}
            <div className="text-blue-300 font-semibold">{cert.type}</div>
            <div className="text-gray-400">{cert.date}</div>
            <div className="text-lg font-bold mt-2 text-white">{cert.course}</div>
            <div className="text-gray-500 mt-1">{cert.issuedDate}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
