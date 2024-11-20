// src/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 p-4">
      {/* <div className="text-2xl font-bold text-teal-400 mb-6">Learnify</div> */}
      <div className="text-2xl font-bold text-blue-400 mb-6">Learnify</div>

      <ul className="space-y-4">
        <li className="hover:bg-blue-600 px-3 py-2 rounded cursor-pointer">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="hover:bg-blue-600 px-3 py-2 rounded cursor-pointer">
          <Link to="/my-course">My Courses</Link>
        </li>
       
     
        <li className="hover:bg-blue-600 px-3 py-2 rounded cursor-pointer">
          <Link to="/messages">Messages</Link> {/* Link to Chat */}
        </li>
        <li className="hover:bg-blue-600 px-3 py-2 rounded cursor-pointer">
          <Link to="/skill-tests">Skill Tests</Link>
        </li>
        <li className="hover:bg-blue-700 px-3 py-2 rounded cursor-pointer">
          <Link to="/certificates">Certificates</Link>
        </li>
        <li className="hover:bg-blue-600 px-3 py-2 rounded cursor-pointer">
          <Link to="/purchased-courses">Purchased Courses</Link>
        </li>

        <li className="hover:bg-blue-600 px-3 py-2 rounded cursor-pointer">
  <Link to="/account">Account</Link>
</li>
        <li className="hover:bg-blue-600 px-3 py-2 rounded cursor-pointer">
          <Link to="/wishlist">Wishlist</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
