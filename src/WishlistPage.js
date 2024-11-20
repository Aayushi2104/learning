import React from 'react';

const WishlistPage = ({ wishlist }) => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist && wishlist.length > 0 ? (
          wishlist.map((course) => (
            <div key={course.id} className="bg-gray-800 p-4 rounded shadow-lg text-center">
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-300 mb-2">{course.description}</p>
              <p className="font-bold text-blue-400 mb-4">{course.price}</p>
              
              {/* Buy Button */}
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Buy
              </button>
            </div>
          ))
        ) : (
          <p>No courses in wishlist</p>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
