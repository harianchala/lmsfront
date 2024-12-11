import React from "react";
import { useNavigate } from "react-router-dom";
import student from "../assets/images/student.png";
import dev1 from "../assets/images/dev1.jpg";
import dev2 from "../assets/images/dev2.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="bg-orange-500 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-red-600">LMS</div>
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all duration-300"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Learning Management System
          </h1>
          <p className="text-lg text-white mb-4">
            Learn different types of online courses to enhance your skills.
          </p>
          <div className="flex justify-center gap-6">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all duration-300">
              Dashboard
            </button>
            <button className="px-6 py-2 bg-white text-purple-600 rounded-md hover:bg-gray-100 transition-all duration-300">
              Access Here
            </button>
          </div>
        </section>

        {/* About Us Section */}
        <section className="container mx-auto px-4 py-12 bg-white shadow-md rounded-md mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src={student}
              alt="About Us"
              className="w-[600px] h-[400px] object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110"
            />
            <div>
              <h2 className="text-xl text-red-500 font-bold mb-4">About Us</h2>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                First Choice for Online Education Anywhere
              </h3>
              <p className="text-gray-600 mb-6">
                AcademeX is an educational website based in India. We are
                committed to providing high-quality education and empowering
                individuals to reach their full potential. With a team of
                experienced educators and a comprehensive curriculum, we strive
                to create a conducive learning environment that fosters
                intellectual growth and personal development.
              </p>
              <p className="text-gray-600">
                Whether you are a student looking for academic excellence or a
                professional seeking to enhance your skills, AcademeX is here to
                support you on your educational journey.
              </p>
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Meet the Developer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Developer Cards */}
            {[{ name: "Roshan", img: dev1 }, { name: "Sai Karthik", img: dev2 }, { name: "Anchala Hari Kailash", img: "" }].map((dev, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-md p-6 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"
              >
                {dev.img && (
                  <img
                    src={dev.img}
                    alt={dev.name}
                    className="w-24 h-24 mx-auto mb-4 rounded-full shadow-md transform transition-transform duration-500 hover:scale-110"
                  />
                )}
                <h3 className="text-xl font-bold text-purple-600 mb-4">
                  {dev.name}
                </h3>
                <p className="text-gray-600">
                  {idx === 0 && "Loves solving real-world problems through efficient and scalable code. Dedicated to continuous learning in software development."}
                  {idx === 1 && "Expertise in both front-end and back-end technologies. Focused on creating responsive and user-friendly applications."}
                  {idx === 2 && "Skilled in debugging, optimizing applications, and enhancing performance to provide seamless user experiences."}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 text-center text-white">
        <p>All rights reserved by Sai Karthik</p>
      </footer>
    </div>
  );
};

export default LandingPage;
