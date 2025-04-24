import { useEffect, useState } from "react";
import React from "react";
import { useRecoilState } from "recoil";
import { coursesState } from "../recoil/atoms/atom";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";

const Home = () => {
  const [courses, setCourses] = useRecoilState(coursesState);
  const [searchQuery, setSearchQuery] = useState("");

  const courseData = React.useMemo(
    () => [
      {
        id: 1,
        title: "React Complete Guide",
        description:
          "Master React with hooks, Redux, and modern best practices",
        instructor: "John Doe",
        price: 49.99,
        image:
          "https://placehold.co/300x200/3498db/FFFFFF/png?text=React+Course",
        category: "Frontend Development",
        duration: "20 hours",
        level: "Intermediate",
      },
      {
        id: 2,
        title: "Python for Data Science",
        description:
          "Learn Python programming for data analysis and visualization",
        instructor: "Emily Chen",
        price: 89.99,
        image:
          "https://placehold.co/300x200/8e44ad/FFFFFF/png?text=Python+Course",
        category: "Data Science",
        duration: "35 hours",
        level: "Beginner",
      },
      {
        id: 3,
        title: "AWS Cloud Architecture",
        description: "Design and deploy scalable solutions on AWS cloud platform", 
        instructor: "Sarah Wilson",
        price: 129.99,
        image: "https://placehold.co/300x200/e67e22/FFFFFF/png?text=AWS+Cloud",
        category: "Cloud Computing",
        duration: "40 hours",
        level: "Advanced",
      },
      {
        id: 4,
        title: "UI/UX Design Fundamentals",
        description: "Create beautiful and user-friendly interfaces and experiences",
        instructor: "Mike Zhang",
        price: 69.99,
        image: "https://placehold.co/300x200/1abc9c/FFFFFF/png?text=UI+Design",
        category: "Design",
        duration: "25 hours",
        level: "Beginner",
      },
      {
        id: 5,
        title: "Blockchain Development",
        description: "Build decentralized applications with Ethereum",
        instructor: "Alex Kumar",
        price: 149.99,
        image: "https://placehold.co/300x200/9b59b6/FFFFFF/png?text=Blockchain",
        category: "Blockchain",
        duration: "45 hours",
        level: "Advanced",
      },
      {
        id: 6,
        title: "Digital Marketing Mastery",
        description: "Learn SEO, social media, and content marketing",
        instructor: "Lisa Thompson",
        price: 79.99,
        image: "https://placehold.co/300x200/e74c3c/FFFFFF/png?text=Marketing",
        category: "Marketing",
        duration: "30 hours",
        level: "Intermediate",
      },
      {
        id: 7,
        title: "iOS App Development",
        description: "Create iOS apps with Swift and SwiftUI",
        instructor: "David Chen",
        price: 119.99,
        image: "https://placehold.co/300x200/2980b9/FFFFFF/png?text=iOS+Dev",
        category: "Mobile Development",
        duration: "38 hours",
        level: "Intermediate",
      },
      {
        id: 8,
        title: "Machine Learning with TensorFlow",
        description: "Build and deploy ML models with TensorFlow",
        instructor: "Maria Garcia",
        price: 159.99,
        image: "https://placehold.co/300x200/c0392b/FFFFFF/png?text=ML",
        category: "Data Science",
        duration: "50 hours",
        level: "Advanced",
      },
      {
        id: 9,
        title: "DevOps Engineering",
        description: "Master CI/CD, Docker, and Kubernetes",
        instructor: "Tom Anderson",
        price: 139.99,
        image: "https://placehold.co/300x200/27ae60/FFFFFF/png?text=DevOps",
        category: "DevOps",
        duration: "42 hours",
        level: "Advanced",
      },
      {
        id: 10,
        title: "Full Stack JavaScript",
        description: "Master MERN stack development with modern JavaScript",
        instructor: "Ryan Johnson",
        price: 129.99,
        image: "https://placehold.co/300x200/3498db/FFFFFF/png?text=Full+Stack",
        category: "Web Development",
        duration: "48 hours",
        level: "Intermediate",
      },
      {
        id: 11,
        title: "Cybersecurity Fundamentals",
        description: "Learn network security, penetration testing, and cyber defense",
        instructor: "James Wilson",
        price: 144.99,
        image: "https://placehold.co/300x200/2c3e50/FFFFFF/png?text=Security",
        category: "Cybersecurity",
        duration: "36 hours",
        level: "Intermediate",
      },
      {
        id: 12,
        title: "Game Development with Unity",
        description: "Create 3D games using Unity and C# programming language",
        instructor: "Sophie Anderson",
        price: 99.99,
        image: "https://placehold.co/300x200/16a085/FFFFFF/png?text=Game+Dev",
        category: "Game Development",
        duration: "45 hours",
        level: "Beginner",
      }
    ],
    []
  );

  useEffect(() => {
    setCourses(courseData);
  }, [setCourses, courseData]);

  // Filter courses based on search query
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-dark-primary">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6 text-dark-text">
            Available Courses
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses, categories, or instructors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 pr-4 text-dark-text bg-dark-secondary border-2 border-dark-accent rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 placeholder-gray-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-6 w-6 text-dark-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          {searchQuery && (
            <p className="mt-2 text-sm text-dark-muted">
              Found {filteredCourses.length} course(s) matching your search
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
