// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Getin from './components/Getin';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/register" element={<Login />} />
//         <Route path="/login" element={<Getin />} />
//         {/* <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/" element={<Navigate to="/register" />} />
//         <Route path="*" element={<Navigate to="/register" />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import Getin from './components/Getin';
// import Dashboard from './components/Dashbord';
// // import Leave from './components/Leave';
// import TeacherDashboard from './components/TeacherDashboard';
// import LeaveStatus from './components/LeaveStatus'

// const getUserRole = () => localStorage.getItem("userRole");

// // Protected Route Component
// const ProtectedRoute = ({ element, role }) => {
//   const userRole = getUserRole();
//   return userRole === role ? element : <Navigate to="/login" />;
// };
// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/register" element={<Login />} />
//         <Route path="/login" element={<Getin />} />
//         <Route path="/" element={<Getin />} />
//         <Route path="*" element={<Getin />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/leave-status" element={<LeaveStatus />} />
//         <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Getin from "./components/Getin";
import Dashboard from "./components/Dashbord";
import TeacherDashboard from "./components/TeacherDashboard";
import LeaveStatus from "./components/LeaveStatus";

// Function to get user role from localStorage
const getUserRole = () => localStorage.getItem("userRole");

// Protected Route Component
const ProtectedRoute = ({ element, role }) => {
  const userRole = getUserRole();
  return userRole === role ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/register" element={<Login />} />
        <Route path="/login" element={<Getin />} />
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Student Routes */}
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} role="student" />} />
        <Route path="/leave-status" element={<ProtectedRoute element={<LeaveStatus />} role="student" />} />

        {/* Teacher Routes */}
        <Route path="/teacher-dashboard" element={<ProtectedRoute element={<TeacherDashboard />} role="teacher" />} />

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;

