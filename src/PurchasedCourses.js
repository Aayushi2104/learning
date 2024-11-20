import React from 'react';
import CourseCard from './CourseCard';

const MyCourse = ({ purchasedCourses }) => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">Purchased Courses</h1>

      {purchasedCourses.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {purchasedCourses.map(course => (
            <CourseCard key={course.id} course={course} showButtons={false} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400 mt-4">No courses purchased yet.</p>
      )}
    </div>
  );
};

export default MyCourse;
