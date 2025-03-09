// import './Dashboard.css'; // Ensure the file name matches the import
// import React from 'react';
// import Image from "../assets/image.png";
// import Logo from "../assets/logo.png";
// import user from "../assets/user.png";

// const Dashboard = () => {
//   const handleLoginClick = (id, date, startHour, endHour, isSuccess) => {
//     console.log("last_login clicked!");
//     console.log("ID:", id);
//     console.log("Date:", date);
//     console.log("Start Hour:", startHour);
//     console.log("End Hour:", endHour);
//     console.log("Is Success:", isSuccess);
//   };

//   return (
//     <div>
//       <div className="container-xxl position-relative bg-white d-flex p-0">
//         <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
//           <div className="spinner-border text-primary" role="status">
//             <span className="sr-only">Loading...</span>
//           </div>
//         </div>
//         <div className="sidebar pe-4 pb-3">
//           <nav className="navbar bg-light navbar-light">
//             <a href="#" className="navbar-brand mx-4 mb-3">
//               <h3 className="text-primary">CAMPS</h3>
//             </a>
//             <div className="navbar-nav w-100">
//               <div className="nav-item dropdown">
//                 <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
//                   <i className="fa fa-tachometer-alt me-2" />Student
//                 </a>
//                 <div className="dropdown-menu bg-transparent border-0">
//                   <a href="details.html" className="dropdown-item">Profile</a>
//                   <a href="attendence.html" className="dropdown-item">Day-Hostel Attendance</a>
//                   <a href="leave.html" className="dropdown-item">Leave Apply</a>
//                   <a href="scholarship.html" className="dropdown-item">Scholarship</a>
//                   <a href="skill.html" className="dropdown-item">Skill Development</a>
//                 </div>
//               </div>
//               <div className="nav-item dropdown">
//                 <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
//                   <i className="fa fa-money-bill-alt me-2" />Fees
//                 </a>
//                 <div className="dropdown-menu bg-transparent border-0">
//                   <a href="#" className="dropdown-item">Download Demand/Receipt</a>
//                   <a href="#" className="dropdown-item">Fees Payment Status</a>
//                   <a href="#" className="dropdown-item">No Due Bank details Form</a>
//                 </div>
//               </div>
//               <div className="nav-item dropdown">
//                 <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
//                   <i className="fa fa-laptop me-2" />Transport
//                 </a>
//                 <div className="dropdown-menu bg-transparent border-0">
//                   <a href="#" className="dropdown-item">Bus Request Confirmation</a>
//                 </div>
//               </div>
//               <div className="nav-item dropdown">
//                 <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
//                   <i className="fa fa-th me-2" />Curriculum
//                 </a>
//                 <div className="dropdown-menu bg-transparent border-0">
//                   <a href="#" className="dropdown-item">Curriculum Report</a>
//                   <a href="#" className="dropdown-item">Syllabus Report</a>
//                 </div>
//               </div>
//               <div className="nav-item dropdown">
//                 <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
//                   <i className="fa fa-keyboard me-2" />Academics
//                 </a>
//                 <div className="dropdown-menu bg-transparent border-0">
//                   <a href="#" className="dropdown-item">Course Registration</a>
//                   <a href="#" className="dropdown-item">Lesson Plan</a>
//                   <a href="#" className="dropdown-item">Question Bank</a>
//                   <a href="#" className="dropdown-item">Reports</a>
//                   <a href="#" className="dropdown-item">Survey/Feedbacks</a>
//                   <a href="#" className="dropdown-item">Test/Assignments/Tutorials</a>
//                   <a href="#" className="dropdown-item">Submit Video</a>
//                   <a href="#" className="dropdown-item">Indirect CO/Po</a>
//                 </div>
//               </div>
//               <div className="nav-item dropdown">
//                 <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
//                   <i className="fa fa-table me-2" />Exams
//                 </a>
//                 <div className="dropdown-menu bg-transparent border-0">
//                   <a href="#" className="dropdown-item">Hall Ticket</a>
//                   <a href="#" className="dropdown-item">Result</a>
//                 </div>
//               </div>
//               <div className="nav-item dropdown">
//                 <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
//                   <i className="fa fa-chart-bar me-2" />Activity
//                 </a>
//                 <div className="dropdown-menu bg-transparent border-0">
//                   <a href="#" className="dropdown-item">Activity Submission</a>
//                 </div>
//               </div>
//               <div className="nav-item dropdown">
//                 <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
//                   <i className="fa fa-chart-bar me-2" />Documentation
//                 </a>
//                 <div className="dropdown-menu bg-transparent border-0">
//                   <a href="#" className="dropdown-item">Submit/View Documents</a>
//                   <a href="#" className="dropdown-item">Cdocs</a>
//                   <a href="#" className="dropdown-item">Events</a>
//                 </div>
//               </div>
//               <div className="nav-item dropdown">
//                 <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
//                   <i className="fa fa-chart-bar me-2" />Library
//                 </a>
//                 <div className="dropdown-menu bg-transparent border-0">
//                   <a href="#" className="dropdown-item">Search</a>
//                   <a href="#" className="dropdown-item">Transaction</a>
//                 </div>
//               </div>
//               <div>
//                 <a href="#" className="nav-link dropdown-toggle">
//                   <i className="fa fa-chart-bar me-2" />Event Details
//                 </a>
//               </div>
//               <div className="nav-item dropdown">
//                 <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
//                   <i className="fa fa-chart-bar me-2" />Skills
//                 </a>
//                 <div className="dropdown-menu bg-transparent border-0">
//                   <a href="#" className="dropdown-item">Source Book</a>
//                 </div>
//               </div>
//               <div>
//                 <a href="#" className="nav-link dropdown-toggle">
//                   <i className="fa fa-chart-bar me-2" />Daily News
//                 </a>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>
//       <div className="content">
//         <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
//           <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
//             <h2 className="text-primary mb-0"><i className="fa fa-hashtag" /></h2>
//           </a>
//           <a href="#" className="sidebar-toggler flex-shrink-0">
//             <i className="fa fa-bars" />
//           </a>
//           <form className="d-none d-md-flex ms-4">
//             <input className="form-control border-0" type="search" placeholder="Search" />
//           </form>
//           <div className="navbar-nav align-items-center ms-auto">
//             <div className="nav-item dropdown">
//               <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
//                 <img className="rounded-circle me-lg-2" src={user} alt="" style={{width: 40, height: 40}} />
//                 <span className="d-none d-lg-inline-flex">KAMALESH AND KAVITHARUN</span>
//               </a>
//               <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
//                 <a href="profile.html" className="dropdown-item">My Profile</a>
//                 <a href="#" className="dropdown-item">Settings</a>
//                 <a href="login.html" className="dropdown-item">Log Out</a>
//               </div>
//             </div>
//           </div>
//         </nav>
//         <div className="table-container">
//           <h1 className="title">BIT-CAMPS</h1>
//           <div className="table-wrapper">
//             <table className="login-table">
//               <tbody>
//                 <tr>
//                   <td colSpan={7} className="header">LOGIN ATTEMPTS</td>
//                 </tr>
//                 <tr>
//                   <th>Date</th>
//                   <th colSpan={2}>Before Working Hours (12 AM-08 AM)</th>
//                   <th colSpan={2}>During Working Hours (08 AM-05 PM)</th>
//                   <th colSpan={2}>After Working Hours (05 PM-12 AM)</th>
//                 </tr>
//                 <tr>
//                   <th />
//                   <th className="success">Success</th>
//                   <th className="failure">Failure</th>
//                   <th className="success">Success</th>
//                   <th className="failure">Failure</th>
//                   <th className="success">Success</th>
//                   <th className="failure">Failure</th>
//                 </tr>
//                 <tr>
//                   <td className="date">31-05-2023</td>
//                   <td className="success-cell">
//                     <a href="#" onClick={() => handleLoginClick(3, '31-05-2023', '00', '07', 1)}>0</a>
//                   </td>
//                   <td className="failure-cell">
//                     <a href="#" onClick={() => handleLoginClick(3, '31-05-2023', '00', '07', 0)}>0</a>
//                   </td>
//                   <td className="success-cell">
//                     <a href="#" onClick={() => handleLoginClick(3, '31-05-2023', '08', '17', 1)}>1</a>
//                   </td>
//                   <td className="failure-cell">
//                     <a href="#" onClick={() => handleLoginClick(3, '31-05-2023', '08', '17', 0)}>0</a>
//                   </td>
//                   <td className="success-cell">
//                     <a href="#" onClick={() => handleLoginClick(3, '31-05-2023', '18', '23', 1)}>0</a>
//                   </td>
//                   <td className="failure-cell">
//                     <a href="#" onClick={() => handleLoginClick(3, '31-05-2023', '18', '23', 0)}>0</a>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import './Dashbord.css';
  import college from "../assets/college.jpg";

  const Dashboard = () => {
    const navigate = useNavigate(); // React Router navigation hook

    const [leaveType, setLeaveType] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [toDate, setToDate] = useState('');
    const [toTime, setToTime] = useState('');
    const [reason, setReason] = useState('');
    const [activityId, setActivityId] = useState('');

    const handleLeaveTypeChange = (e) => {
      const selectedLeaveType = e.target.value;
      setLeaveType(selectedLeaveType);

      // If "Leave" is selected, reset activityId
      if (selectedLeaveType === "3") {
        setActivityId('');
      }
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();

      // Create leave application object
      const leaveApplication = {
        leaveType,
        fromDate,
        fromTime,
        toDate,
        toTime,
        reason,
        activityId: leaveType === "3" ? "" : activityId, // Only save activityId if it's not "Leave"
        status: "Pending", // Default status
      };

      // Get existing leaves from localStorage
      const existingLeaves = JSON.parse(localStorage.getItem("leaves")) || [];

      // Add new leave application
      existingLeaves.push(leaveApplication);

      // Save updated data to localStorage
      localStorage.setItem("leaves", JSON.stringify(existingLeaves));

      // Redirect to Leave Status page
      navigate('/leave-status');
    };

    return (
      <div
        className="dashboard-page"
        style={{
          backgroundImage: `url(${college})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <div className="dashboard-container">
          <h2 className="title">Leave Apply</h2>
          <div className="content">
            <form id="leave_form" onSubmit={handleFormSubmit}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Leave Type</span>
                  <select id="leave_type" name="leave_type" value={leaveType} onChange={handleLeaveTypeChange} required>
                    <option value="">--Select--</option>
                    <option value="3">Leave</option>
                    <option value="11">ON DUTY</option>
                    <option value="17">INTERNAL OD</option>
                    <option value="24">Internal Training</option>
                  </select>
                </div>
                <div className="input-box">
                  <span className="details">From Date</span>
                  <input type="date" id="from_date" name="from_date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} required />
                </div>
                <div className="input-box">
                  <span className="details">From Time</span>
                  <input type="time" id="from_time" name="from_time" value={fromTime} onChange={(e) => setFromTime(e.target.value)} required />
                </div>
                <div className="input-box">
                  <span className="details">To Date</span>
                  <input type="date" id="to_date" name="to_date" value={toDate} onChange={(e) => setToDate(e.target.value)} required />
                </div>
                <div className="input-box">
                  <span className="details">To Time</span>
                  <input type="time" id="to_time" name="to_time" value={toTime} onChange={(e) => setToTime(e.target.value)} required />
                </div>
                <div className="input-box">
                  <span className="details">Reason</span>
                  <textarea id="reason" name="reason" cols="40" rows="3" value={reason} onChange={(e) => setReason(e.target.value)} required></textarea>
                </div>

                {/* Show Activity ID field only when leave type is NOT "Leave" */}
                {leaveType !== "3" && leaveType !== "" && (
                  <div className="input-box">
                    <label htmlFor="act_id">
                      <span className="mandatory">*</span>Activity Id:
                    </label>
                    <input type="text" id="act_id" name="act_id" value={activityId} onChange={(e) => setActivityId(e.target.value)} required />
                  </div>
                )}
              </div>
              <div className="center-button">
                <div className="button">
                  <button type="submit">Submit</button>
                </div>
              </div>
              <div className="check-button-container">
                <button type="button" className="check-button" onClick={() => navigate('/leave-status')}>
                  Check Status
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  export default Dashboard;





