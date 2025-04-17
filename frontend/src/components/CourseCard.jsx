import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../recoil/atoms/atom";

const CourseCard = ({
  title,
  description,
  instructor,
  price,
  image,
  category,
  duration,
  level,
}) => {
  const auth = useRecoilValue(authState);

  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-90"
        />
        <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold transform transition-transform duration-300 hover:scale-110">
          {category}
        </span>
        <span className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold transform transition-transform duration-300 hover:scale-110">
          {level}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-600">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center transition-colors duration-300 group-hover:text-blue-600">
            <svg
              className="w-5 h-5 text-gray-500 mr-2 transition-colors duration-300 group-hover:text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-gray-500 transition-colors duration-300 group-hover:text-blue-600">
              {duration}
            </span>
          </div>
          <p className="text-blue-600 font-bold transition-colors duration-300 group-hover:text-blue-800">
            ${price}
          </p>
        </div>

        <p className="text-gray-500 mb-4 transition-colors duration-300 group-hover:text-gray-700">
          Instructor: {instructor}
        </p>

        {auth.isAuthenticated ? (
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded transform transition-all duration-300 hover:bg-blue-700 hover:scale-105 active:scale-95 hover:shadow-lg">
            Enroll Now
          </button>
        ) : (
          <Link
            to="/login"
            className="w-full bg-gray-500 text-white py-2 px-4 rounded block text-center transform transition-all duration-300 hover:bg-gray-600 hover:scale-105 active:scale-95 hover:shadow-lg"
          >
            Login to Enroll
          </Link>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
