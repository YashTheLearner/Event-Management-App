import React from 'react';

export const EventsCard = () => {
  return (
    <div className="relative w-full h-80 rounded-lg shadow-lg overflow-hidden group">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundImage: 'url(https://via.placeholder.com/400x300)', // Replace with your image URL
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-70"></div>

      {/* Content */}
      <div className="relative p-6 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-bold text-white mb-2">React Conference 2024</h3>
          <p className="text-sm text-gray-200">
            Join us for an immersive experience on the latest React developments.
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-xs text-gray-300">
            <p>Mode: In-person</p>
            <p>Date: March 10, 2024</p>
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
