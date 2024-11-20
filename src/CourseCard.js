import React from 'react';

const CourseCard = ({ course, toggleWishlist, isWishlisted, purchaseCourse, showButtons }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded" />
      <h2 className="text-xl font-semibold mt-4">{course.title}</h2>
      <p className="text-gray-400 mt-2">{course.description}</p>
      <p className="text-blue-400 mt-2">{course.price}</p>

      {/* Conditionally render buttons based on showButtons prop */}
      {showButtons && (
        <div className="flex gap-2 mt-4">
          <button 
            className="mt-2 p-2 bg-blue-600 rounded text-white"
            onClick={() => purchaseCourse(course)}  // Call purchaseCourse when clicked
          >
            Buy
          </button>
          <button 
            className={`mt-2 p-2 ${isWishlisted ? 'bg-red-600' : 'bg-gray-600'} rounded text-white`}
            onClick={() => toggleWishlist(course)} // Call toggleWishlist when clicked
          >
            {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
