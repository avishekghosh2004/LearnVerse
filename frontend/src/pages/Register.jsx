import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { authState } from "../recoil/atoms/atom";
import API from "../api/axios";
import Footer from "../components/Footer";

const Register = () => {
  const navigate = useNavigate();
  const setAuth = useSetRecoilState(authState);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else {
      const passwordErrors = [];
      if (formData.password.length < 8) {
        passwordErrors.push("At least 8 characters");
      }
      if (!/[A-Z]/.test(formData.password)) {
        passwordErrors.push("One uppercase letter");
      }
      if (!/[a-z]/.test(formData.password)) {
        passwordErrors.push("One lowercase letter");
      }
      if (!/[0-9]/.test(formData.password)) {
        passwordErrors.push("One number");
      }
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
        passwordErrors.push("One special character");
      }
      if (passwordErrors.length > 0) {
        newErrors.password = `Password requirements: ${passwordErrors.join(
          ", "
        )}`;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        const response = await API.post("/auth/register", formData);

        // Set auth state directly from registration response
        setAuth({
          isAuthenticated: true,
          user: response.data.user,
          token: response.data.token,
        });

        localStorage.setItem("token", response.data.token);
        API.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;

        navigate("/");
      } catch (error) {
        setErrors({
          submit: error.response?.data?.message || "Registration failed",
        });
      }
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-6 transform transition-all duration-300 hover:shadow-2xl">
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Create your account
            </h2>
            <p className="mt-3 text-center text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
              >
                Login
              </Link>
            </p>
          </div>

          {errors.submit && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {errors.submit}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="example@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="********"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 hover:text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 hover:text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-3 px-4 rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ${
                isSubmitting
                  ? "opacity-75 cursor-not-allowed"
                  : "transform hover:scale-[1.02]"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating account...
                </span>
              ) : (
                "Create account"
              )}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

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

export { CourseCard };
export default Register;
