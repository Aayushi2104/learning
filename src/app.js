import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import MyCourse from './MyCourse';
import CourseDetails from './CourseDetails';
import WishlistPage from './WishlistPage';
import QuizComponent from './QuizComponent';
import Chat from './Chat'; 
import AccountPage from './AccountPage';
import Certificate from './Certificate';
import PurchasedCourses from './PurchasedCourses'; // Import the new component

const App = () => {
  const [wishlist, setWishlist] = useState([]);
  const [purchasedCourses, setPurchasedCourses] = useState([]);

  const toggleWishlist = (course) => {
    setWishlist((prevWishlist) =>
      prevWishlist.some((item) => item.id === course.id)
        ? prevWishlist.filter((item) => item.id !== course.id)
        : [...prevWishlist, course]
    );
  };

  const purchaseCourse = (course) => {
    setPurchasedCourses((prevPurchasedCourses) => [...prevPurchasedCourses, course]);
  };

  return (
    <Router>
      <div className="flex w-full h-screen bg-gray-900 text-white">
        <Sidebar />
        <div className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route 
              path="/" 
              element={
                <Dashboard 
                  toggleWishlist={toggleWishlist} 
                  wishlist={wishlist} 
                  purchaseCourse={purchaseCourse} 
                  purchasedCourses={purchasedCourses} 
                />
              } 
            />
            <Route 
              path="/my-course" 
              element={<MyCourse purchasedCourses={purchasedCourses} />} 
            />
            <Route 
              path="/purchased-courses" 
              element={<PurchasedCourses purchasedCourses={purchasedCourses} />} 
            />

            {/* Passing purchasedCourses to MyCourse */}
            <Route 
              path="/my-course" 
              element={<MyCourse purchasedCourses={purchasedCourses} />} 
            />
            <Route path="/course-details" element={<CourseDetails />} />
            <Route path="/wishlist" element={<WishlistPage wishlist={wishlist} />} />
            <Route path="/course/:courseId" element={<CourseDetails />} />
            <Route path="/skill-tests" element={<QuizComponent />} /> 
            <Route path="/messages" element={<Chat />} /> 
            <Route path="/certificates" element={<Certificate />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
