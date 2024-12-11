// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import StudentDashboard from './Pages/Student/StudentDashboard';
import FacultyDashboard from './Pages/Faculty/FacultyDashboard';
import LoginPage from './Pages/login';
import FacultyContact from './Pages/Faculty/contactus';
import MyCourses from './Pages/Faculty/mycourses';
import CourseUpload from './Pages/Faculty/UploadContent';
import AddStudent from './Pages/Admin/student/addstudent';
import AddFaculty from './Pages/Admin/faculty/addfaculty';
import AdminSettings from './Pages/Admin/settings';
import AddCourse from './Pages/Admin/addcourse';
import ViewCourses from './Pages/Admin/viewcourse';
import StudentTable from './Pages/Admin/student/display';
import FacultyTable from './Pages/Admin/faculty/facultydisplay';
import ProfilePage from './Pages/Faculty/facultyprofile';
import EditStudent from './Pages/Admin/student/editstudent';
import EditFaculty from './Pages/Admin/faculty/editfaculty';
import LandingPage from './Pages/landing';
import AddAdmin from './Pages/Admin/admin/addadmin';
import AdminTable from './Pages/Admin/admin/display';
import CreateCourse from './Pages/Faculty/createcourse';
import ManageCourses from './Pages/Faculty/managecourses';
import UploadGrades from './Pages/Faculty/uploadgrades';
import EnrollCourses from './Pages/Student/enrollcourse';
import EditAdmin from './Pages/Admin/admin/editadmin';
import StudentMyCourses from './Pages/Student/mycourses';
import StudentIssue from './Pages/Admin/admin/studentissue';
import FacultyIssue from './Pages/Admin/admin/facultyissue';
import StudentContact from './Pages/Student/studentconnect';
import FacultySettings from './Pages/Faculty/settings';
import StudentSettings from './Pages/Student/studentsettings';
import StudentProfile from './Pages/Student/studentprofile';
import QuizPage from './Pages/Quiz/QuizPage';
function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />

        {/* Admin Routes */}
        <Route path="/admin/admindashboard" element={<AdminDashboard />} />
        <Route path="/admin/student/addstudent" element={<AddStudent />} />
        <Route path="/admin/faculty/addfaculty" element={<AddFaculty />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
        <Route path="/admin/studentissue" element={<StudentIssue />} />
        <Route path="/admin/facultyissue" element={<FacultyIssue />} />
        <Route path="/admin/addcourse" element={<AddCourse />} />
        <Route path="/admin/viewcourse" element={<ViewCourses />} />
        <Route path="/admin/student/display" element={<StudentTable />} />
        <Route path="/admin/faculty/facultydisplay" element={<FacultyTable />} />
        <Route path="/admin/faculty/editfaculty/:id" element={<EditFaculty />} />
        <Route path="/admin/admin/addadmin" element={<AddAdmin />} />
        <Route path="/admin/admin/display" element={<AdminTable />} />
        <Route path="/admin/student/editstudent/:id" element={<EditStudent />} />
        <Route path="/admin/editadmin/:id" element={<EditAdmin />} />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/enrollcourse" element={<EnrollCourses />} />
        <Route path="/student/studentmycourses" element={<StudentMyCourses />} />
        <Route path="/student/connectus" element={<StudentContact />} />
        <Route path="/student/settings" element={<StudentSettings />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path='/student/quiz'element={<QuizPage/>}/>

        {/* Faculty Routes */}
        <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
        <Route path="/faculty/contactus" element={<FacultyContact />} />
        <Route path="/faculty/mycourses" element={<MyCourses />} />
        <Route path="/faculty/uploadcourse" element={<CourseUpload />} />
        <Route path="/faculty/profile" element={<ProfilePage />} />
        <Route path="/faculty/courses" element={<ManageCourses />} />
        <Route path="/faculty/createcourses" element={<CreateCourse />} />
        <Route path="/faculty/uploadgrades" element={<UploadGrades />} />
        <Route path="/faculty/settings" element={<FacultySettings />} />
        
      </Routes>
    </Router>
  );
}

export default App;
