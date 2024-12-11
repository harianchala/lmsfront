import React, { useState } from "react";

const Sidebar = () => {
  const [dropdowns, setDropdowns] = useState({
    student: false,
    faculty: false,
    admin: false,
    course: false,
    issue: false,
  });

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-[#6B21A8] text-[#D1D5DB] flex">
      <div className="w-64 bg-[#7C3AED] shadow-xl flex flex-col justify-between">
        <div>
          <div className="p-4 text-lg font-bold text-center border-b border-gray-600">
            Admin
          </div>

          <ul className="mt-4 space-y-1">
            <li className="px-6 py-2 hover:bg-[#9333EA] transition">
              <a href="/Admin/Admindashboard">Dashboard</a>
            </li>

            {/* Student */}
            <li>
              <button
                className="w-full px-6 py-2 text-left hover:bg-[#9333EA] transition"
                onClick={() => toggleDropdown("student")}
              >
                Student
              </button>
              {dropdowns.student && (
                <ul className="ml-6 space-y-1">
                  <li className="px-6 py-2 hover:bg-[#A78BFA] transition">
                    <a href="/admin/student/addstudent">Add Student</a>
                  </li>
                  <li className="px-6 py-2 hover:bg-[#A78BFA] transition">
                    <a href="/admin/student/display">Display</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Faculty */}
            <li>
              <button
                className="w-full px-6 py-2 text-left hover:bg-[#9333EA] transition"
                onClick={() => toggleDropdown("faculty")}
              >
                Faculty
              </button>
              {dropdowns.faculty && (
                <ul className="ml-6 space-y-1">
                  <li className="px-6 py-2 hover:bg-[#A78BFA] transition">
                    <a href="/admin/faculty/addfaculty">Add Faculty</a>
                  </li>
                  <li className="px-6 py-2 hover:bg-[#A78BFA] transition">
                    <a href="/admin/faculty/facultydisplay">Display</a>
                  </li>
                  <li className="px-6 py-2 hover:bg-[#A78BFA] transition">
                    <a href="/faculty/content-creator">Content Creator</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Admin */}
            <li>
              <button
                className="w-full px-6 py-2 text-left hover:bg-[#9333EA] transition"
                onClick={() => toggleDropdown("admin")}
              >
                Admin
              </button>
              {dropdowns.admin && (
                <ul className="ml-6 space-y-1">
                  <li className="px-6 py-2 hover:bg-[#A78BFA] transition">
                    <a href="/admin/admin/addadmin">Add Admin</a>
                  </li>
                  <li className="px-6 py-2 hover:bg-[#A78BFA] transition">
                    <a href="/admin/admin/display">Display</a>
                  </li>
                  <li className="px-6 py-2 hover:bg-[#A78BFA] transition">
                    <a href="/admin/role">Role</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Course */}
            <li>
              <button
                className="w-full px-6 py-2 text-left hover:bg-[#9333EA] transition"
                onClick={() => toggleDropdown("course")}
              >
                Course
              </button>
              {dropdowns.course && (
                <ul className="ml-6 space-y-1">
                  <li className="px-6 py-2 hover:bg-[#A78BFA] transition">
                    <a href="/admin/addcourse">Add Course</a>
                  </li>
                  <li className="px-6 py-2 hover:bg-[#A78BFA] transition">
                    <a href="/admin/viewcourse">View Course</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Issues */}
            <li>
              <button
                className="w-full px-6 py-2 text-left hover:bg-[#9333EA] transition"
                onClick={() => toggleDropdown("issue")}
              >
                Issues
              </button>
              {dropdowns.issue && (
                <ul className="ml-6 space-y-1">
                  <li className="px-6 py-2 hover:bg-[#A78BFA] transition">
                    <a href="/admin/studentissue">Student Issues</a>
                  </li>
                  <li className="px-6 py-2 hover:bg-[#A78BFA] transition">
                    <a href="/admin/facultyissue">Faculty Issues</a>
                  </li>
                </ul>
              )}
            </li>

            <li className="px-6 py-2 hover:bg-[#9333EA] transition">
              <a href="/admin/settings">Settings</a>
            </li>
          </ul>
        </div>

        <ul>
          <li className="px-6 py-2 hover:bg-[#EF4444] transition">
            <a href="/">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
