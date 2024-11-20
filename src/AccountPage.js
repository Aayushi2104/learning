import React from 'react';
import profile from './images/s1.jpeg';
const AccountPage = () => {
  // Sample user data; in a real app, this would come from state or a database
  const user = {
    name: 'xyz',
    profileImage: profile, // Placeholder image; replace with actual image URL if available
    username: 'y_fy',
    purchasedCourses: [
      'React for Beginners',
      'Advanced JavaScript',
      'Node.js Essentials',
    ],
    credentials: [
      {
        title: 'Programming in C++: A Hands-on Introduction Specialization',
        provider: 'Codio',
        field: 'Computer Science',
        dateCompleted: 'February 2024',
      },
    ],
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-16 rounded-xl shadow-lg w-11/12 max-w-7xl">
        {/* Personal Details Section */}
        <div className="flex items-center mb-12">
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full mr-8 border-4 border-blue-400"
          />
          <div>
            <h1 className="text-4xl font-bold text-blue-400">{user.name}</h1>
            <p className="text-gray-400 text-2xl">Username: {user.username}</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-400 mb-6">Experience</h2>
          <p className="text-gray-300 mb-4 text-xl">Projects and work history will be displayed here.</p>
          <button className="text-blue-400 text-lg mr-6">Add Project</button>
          <button className="text-blue-400 text-lg">Add Work Experience</button>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-400 mb-6">Education</h2>
          <div className="bg-gray-700 p-8 rounded-lg shadow-inner">
            {user.credentials.map((cred, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-2xl font-semibold text-blue-300">{cred.title}</h3>
                <p className="text-gray-400 text-xl">{cred.provider} • {cred.field}</p>
                <p className="text-gray-400 text-lg">Completed: {cred.dateCompleted}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Purchased Courses Section */}
        <div>
          <h2 className="text-3xl font-semibold text-blue-400 mb-6">Purchased Courses</h2>
          <ul className="list-disc list-inside text-gray-300 text-xl">
            {user.purchasedCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
