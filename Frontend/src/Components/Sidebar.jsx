import React from "react";
import { Link } from "react-router-dom"; // To handle navigation

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-[rgba(17,24,39,1)] text-white flex flex-col">
      <div className="flex justify-center items-center p-6">
        <h2 className="text-2xl font-bold">App Name</h2> {/* Change to your app's name */}
      </div>
      <nav className="flex flex-col gap-4 p-6">
        <Link
          to="/profile"
          className="hover:bg-gray-700 py-2 px-4 rounded-lg transition duration-300"
        >
          Profile
        </Link>
        <Link
          to="/my-events"
          className="hover:bg-gray-700 py-2 px-4 rounded-lg transition duration-300"
        >
          My Events
        </Link>
        <Link
          to="/dashboard"
          className="hover:bg-gray-700 py-2 px-4 rounded-lg transition duration-300"
        >
          Dashboard
        </Link>
        <button
          onClick={() => alert("Logging out...")} // Replace with actual logout functionality
          className="hover:bg-red-600 py-2 px-4 rounded-lg transition duration-300 mt-4"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
