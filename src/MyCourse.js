// import React from 'react';
// import { Link } from 'react-router-dom';
// import icon1 from './images/icon1.png';
// import icon2 from './images/icon2.png';
// import icon3 from './images/icon3.png';
// import icon4 from './images/icon4.png';

// const MyCourse = ({ purchasedCourses }) => {
//   // Array of lessons with unique icons for detailed course view
//   const lessons = [
//     { name: 'Iterating', icon: icon1 },
//     { name: 'Filter', icon: icon2 },
//     { name: 'Lazy Iteration', icon: icon3 },
//     { name: 'Reduce Into', icon: icon4 },
//   ];

//   return (
//     <div className="p-6 bg-gray-900 text-white min-h-screen">
//       <h1 className="text-3xl font-semibold mb-6">Purchased Courses</h1>

//       {/* Purchased Courses Grid */}
//       {purchasedCourses && purchasedCourses.length > 0 ? (
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
//           {purchasedCourses.map(course => (
//             <div key={course.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
//               <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded" />
//               <h2 className="text-xl font-semibold mt-4">{course.title}</h2>
//               <p className="text-gray-400 mt-2">{course.description}</p>
//               <p className="text-teal-400 mt-2">{course.price}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-400 mb-8">No purchased courses yet.</p>
//       )}

//       {/* Detailed Course View */}
//       <div className="flex h-full bg-gray-900 text-white">
//         <div className="flex-1 p-8">
//           <div className="mb-6">
//             <h2 className="text-3xl font-semibold">Swift for Intermediate and Advanced iOS Developers</h2>
//             <p className="text-gray-400">Mohammad Azam</p>
//             <div className="flex items-center space-x-4 mt-4">
//               <span className="bg-gray-700 px-2 py-1 rounded text-sm">Enums</span>
//               <span className="bg-gray-700 px-2 py-1 rounded text-sm">Optionals</span>
//               <span className="bg-gray-700 px-2 py-1 rounded text-sm">Advanced iOS</span>
//             </div>
//             <div className="mt-4">
//               <div className="bg-gray-700 w-full rounded-full h-2">
//                 <div className="bg-teal-400 h-2 rounded-full" style={{ width: '60%' }}></div>
//               </div>
//               <div className="flex justify-between text-sm text-gray-400 mt-1">
//                 <span>4/76 lessons</span>
//                 <span>2/35 practical works</span>
//                 <span>5/100 progress</span>
//                 <span>0/1 final project</span>
//               </div>
//             </div>
//           </div>

//           {/* Topic Section */}
//           <div className="bg-gray-800 p-6 rounded-lg mb-8">
//             <h3 className="text-xl font-semibold mb-4">Topic 1 - Understanding Swift Collections</h3>
//             <div className="space-y-4">
//               {lessons.map((lesson, index) => (
//                 <Link to={`/course/${lesson.name.toLowerCase()}`} key={index} className="flex items-center justify-between bg-gray-700 p-4 rounded-lg mb-4">
//                   <div className="flex items-center space-x-4">
//                     <div className="bg-teal-600 p-3 rounded-full">
//                       <img src={lesson.icon} alt="icon" className="w-6 h-6" />
//                     </div>
//                     <div>
//                       <h4 className="text-lg">{lesson.name}</h4>
//                       <p className="text-sm text-gray-400">08:20 · 2 tasks</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <span className="text-green-500">&#10003;</span>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Course Description and Details */}
//           <div className="flex">
//             <div className="w-2/3 pr-4">
//               <h3 className="text-xl font-semibold mb-2">Course Description</h3>
//               <p className="text-gray-400">In this course, you will take a deep dive into Swift features and learn the modern way of writing apps using Swift language...</p>
//             </div>
//             <div className="w-1/3">
//               <h3 className="text-xl font-semibold mb-2">Course Details</h3>
//               <ul className="text-gray-400 space-y-2">
//                 <li>17K learners</li>
//                 <li>29 Aug, 2022 last updated</li>
//                 <li>Medium level</li>
//                 <li>Full lifetime access</li>
//                 <li>English, Spanish</li>
//                 <li>Access on laptop, tablet, and phone</li>
//                 <li>Certificate of completion</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyCourse;

// 


import React from 'react';
import { Link } from 'react-router-dom';
import icon1 from './images/icon1.png'; // Importing unique icons
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
// import icon4 from './images/icon4.png';

const MyCourse = () => {
  // Array of lessons with unique icons
  const lessons = [
    { name: 'Iterating', icon: icon1 },
    { name: 'Filter', icon: icon2 },
    { name: 'LazyIteration', icon: icon3 },
    // { name: 'ReduceInto', icon: icon4 },
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Course Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-semibold">Swift for Intermediate and Advanced iOS Developers</h2>
          <p className="text-gray-400">Mohammad Azam</p>
          <div className="flex items-center space-x-4 mt-4">
            <span className="bg-gray-700 px-2 py-1 rounded text-sm">Enums</span>
            <span className="bg-gray-700 px-2 py-1 rounded text-sm">Optionals</span>
            <span className="bg-gray-700 px-2 py-1 rounded text-sm">Advanced iOS</span>
          </div>
          <div className="mt-4">
            <div className="bg-gray-700 w-full rounded-full h-2">
              <div className="bg-blue-400 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-400 mt-1">
              <span>4/76 lessons</span>
              <span>2/35 practical works</span>
              <span>5/100 progress</span>
              <span>0/1 final project</span>
            </div>
          </div>
        </div>

        {/* Topic Section */}
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Topic 1 - Understanding Swift Collections</h3>
          <div className="space-y-4">
            {/* Lesson Item */}
            {lessons.map((lesson, index) => (
              <Link to={`/course/${lesson.name.toLowerCase()}`} key={index} className="flex items-center justify-between bg-gray-700 p-4 rounded-lg mb-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <img src={lesson.icon} alt="icon" className="w-6 h-6" /> {/* Using unique icon */}
                  </div>
                  <div>
                    <h4 className="text-lg">{lesson.name}</h4>
                    <p className="text-sm text-gray-400">08:20 · 2 tasks</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">&#10003;</span> {/* Check icon */}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Course Description and Details */}
        <div className="flex">
          <div className="w-2/3 pr-4">
            <h3 className="text-xl font-semibold mb-2">Course Description</h3>
            <p className="text-gray-400">In this course, you will take a deep dive into Swift features and learn the modern way of writing apps using Swift language...</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-xl font-semibold mb-2">Course Details</h3>
            <ul className="text-gray-400 space-y-2">
              <li>17K learners</li>
              <li>29 Aug, 2022 last updated</li>
              <li>Medium level</li>
              <li>Full lifetime access</li>
              <li>English, Spanish</li>
              <li>Access on laptop, tablet, and phone</li>
              <li>Certificate of completion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourse;
