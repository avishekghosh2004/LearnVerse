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
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-200">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-95"
        />
        <span className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
          {category}
        </span>
        <span className="absolute top-3 left-3 bg-gray-900/80 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
          {level}
        </span>
      </div>

      <div className="p-5 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>

        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-500 text-sm">
            <svg
              className="w-4 h-4 mr-1.5"
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
            <span>{duration}</span>
          </div>
          <p className="text-blue-600 font-bold text-lg">${price}</p>
        </div>

        <div className="flex items-center text-sm text-gray-500 pb-2">
          <svg
            className="w-4 h-4 mr-1.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="line-clamp-1">{instructor}</span>
        </div>

        {auth.isAuthenticated ? (
          <button className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-[-1px] active:translate-y-[1px] shadow-sm">
            Enroll Now
          </button>
        ) : (
          <Link to="/login">
            <button className="w-full bg-gray-900 text-white py-2.5 px-4 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:translate-y-[-1px] active:translate-y-[1px] shadow-sm flex items-center justify-center">
              <svg 
                className="w-4 h-4 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Login to Enroll
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
