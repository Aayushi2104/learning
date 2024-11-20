// import React from 'react';
// import { useParams } from 'react-router-dom';

// const courseData = {
//   iterating: {
//     title: 'Iterating',
//     duration: '07:58',
//     tasks: 1,
//     materials: [
//       { name: 'Check-list.docx', size: '7.24 KB' },
//       { name: 'Iterating-documentation.pdf', size: '46.25 KB' },
//       { name: 'Iterating-guidelines.pdf', size: '49.43 KB' },
//     ],
//     videoSrc: 'https://www.youtube.com/watch?v=9Snw7polcBU',
//   },
//   filter: {
//     title: 'Filter',
//     duration: '08:20',
//     tasks: 2,
//     materials: [
//       { name: 'Filter-checklist.docx', size: '7.24 KB' },
//       { name: 'Filter-documentation.pdf', size: '46.25 KB' },
//       { name: 'Filter-guidelines.pdf', size: '49.43 KB' },
//     ],
//     videoSrc: 'https://www.youtube.com/watch?v=-mx_Kf3qKJY',
//   },
//   lazyiteration: {
//     title: 'Lazy Iteration',
//     duration: '08:20',
//     tasks: 2,
//     materials: [
//       { name: 'Filter-checklist.docx', size: '7.24 KB' },
//       { name: 'Filter-documentation.pdf', size: '46.25 KB' },
//       { name: 'Filter-guidelines.pdf', size: '49.43 KB' },
//     ],
//     videoSrc: 'https://www.youtube.com/watch?v=nNLqygSI-rE&t=8343s',
//   },
//   // Add more courses here...
// };

// const CourseDetails = () => {
//   const { courseId } = useParams();
//   const course = courseData[courseId];

//   if (!course) {
//     return <p>Course not found</p>;
//   }

//   return (
//     <div className="flex flex-col h-screen bg-gray-900 text-white p-8">
//       {/* Course Header */}
//       <div className="mb-6">
//         <h2 className="text-3xl font-semibold">{course.title}</h2>
//         <div className="flex items-center space-x-4 mt-2">
//           <span className="bg-gray-700 px-3 py-1 rounded text-sm">Lesson ({course.duration})</span>
//           <span className="bg-gray-700 px-3 py-1 rounded text-sm">Task ({course.tasks})</span>
//           <span className="bg-gray-700 px-3 py-1 rounded text-sm">Homework</span>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-1 space-x-6">
//         {/* Video Section */}
//         <div className="flex-1 bg-gray-800 p-6 rounded-lg">
//           {course.videoSrc.includes('youtube.com') ? (
//             <iframe
//               className="w-full h-64 rounded-lg mb-4"
//               src={course.videoSrc.replace('watch?v=', 'embed/')}
//               title={course.title}
//               allowFullScreen
//             ></iframe>
//           ) : (
//             <video className="w-full h-64 rounded-lg mb-4" controls>
//               <source src={course.videoSrc} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           )}
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Materials</h3>
//             <ul className="space-y-2 text-gray-400">
//               {course.materials.map((material, index) => (
//                 <li key={index}>{material.name} - {material.size}</li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Code Editor Section */}
//         <div className="w-1/2 bg-gray-800 p-6 rounded-lg flex flex-col">
//           <h3 className="text-lg font-semibold mb-4">Code Editor</h3>
//           <textarea
//             className="flex-1 bg-gray-700 p-4 rounded-lg text-sm text-white font-mono"
//             placeholder="Write your code here..."
//           />
//           <div className="flex justify-between mt-4">
//             <button className="bg-teal-500 px-4 py-2 rounded-lg hover:bg-teal-400">Run Code</button>
//             <button className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-400">Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetails;


import React from 'react';
import { useParams } from 'react-router-dom';

const courseData = {
  iterating: {
    title: 'Iterating',
    duration: '07:58',
    tasks: 1,
    materials: [
      { name: 'Check-list.docx', size: '7.24 KB' },
      { name: 'Iterating-documentation.pdf', size: '46.25 KB' },
      { name: 'Iterating-guidelines.pdf', size: '49.43 KB' },
    ],
    videoSrc: 'https://www.youtube.com/watch?v=9Snw7polcBU',
  },
  filter: {
    title: 'Filter',
    duration: '08:20',
    tasks: 2,
    materials: [
      { name: 'Filter-checklist.docx', size: '7.24 KB' },
      { name: 'Filter-documentation.pdf', size: '46.25 KB' },
      { name: 'Filter-guidelines.pdf', size: '49.43 KB' },
    ],
    videoSrc: 'https://www.youtube.com/watch?v=-mx_Kf3qKJY',
  },
  lazyiteration: {
    title: 'Lazy Iteration',
    duration: '08:20',
    tasks: 2,
    materials: [
      { name: 'LazyIteration-checklist.docx', size: '7.24 KB' },
      { name: 'LazyIteration-documentation.pdf', size: '46.25 KB' },
      { name: 'LazyIteration-guidelines.pdf', size: '49.43 KB' },
    ],
    videoSrc: 'https://www.youtube.com/watch?v=-mx_Kf3qKJY',
  },
  // reduceinto: {
  //   title: 'Lazy Iteration',
  //   duration: '08:20',
  //   tasks: 2,
  //   materials: [
  //     { name: 'LazyIteration-checklist.docx', size: '7.24 KB' },
  //     { name: 'LazyIteration-documentation.pdf', size: '46.25 KB' },
  //     { name: 'LazyIteration-guidelines.pdf', size: '49.43 KB' },
  //   ],
  //   videoSrc: 'https://www.youtube.com/watch?v=-mx_Kf3qKJY',
  // },
};

const VideoSection = ({ videoSrc, title }) => (
  <div className="flex-1 bg-gray-800 p-6 rounded-lg">
    {videoSrc.includes('youtube.com') ? (
      <iframe
        className="w-full h-64 rounded-lg mb-4"
        src={videoSrc.replace('watch?v=', 'embed/')}
        title={title}
        allowFullScreen
      ></iframe>
    ) : (
      <video className="w-full h-64 rounded-lg mb-4" controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )}
  </div>
);

const MaterialsList = ({ materials }) => (
  <div>
    <h3 className="text-lg font-semibold mb-2">Materials</h3>
    <ul className="space-y-2 text-gray-400">
      {materials.map((material, index) => (
        <li key={index}>
          <a href={`path/to/${material.name}`} download>
            {material.name} - {material.size}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = courseData[courseId];

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white p-8">
      {/* Course Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-semibold">{course.title}</h2>
        <div className="flex items-center space-x-4 mt-2">
          <span className="bg-gray-700 px-3 py-1 rounded text-sm">Lesson ({course.duration})</span>
          <span className="bg-gray-700 px-3 py-1 rounded text-sm">Task ({course.tasks})</span>
          <span className="bg-gray-700 px-3 py-1 rounded text-sm">Homework</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 space-x-6">
        {/* Video Section */}
        <VideoSection videoSrc={course.videoSrc} title={course.title} />

        {/* Code Editor Section */}
        <div className="w-1/2 bg-gray-800 p-6 rounded-lg flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Code Editor</h3>
          <textarea
            className="flex-1 bg-gray-700 p-4 rounded-lg text-sm text-white font-mono"
            placeholder="Write your code here..."
          />
          <div className="flex justify-between mt-4">
            <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-400">Run Code</button>
            <button className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-400">Submit</button>
          </div>
        </div>
      </div>

      {/* Materials List */}
      <MaterialsList materials={course.materials} />
    </div>
  );
};

export default CourseDetails;