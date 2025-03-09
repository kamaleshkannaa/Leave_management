import React, { useEffect, useState } from 'react';
import './LeaveStatus.css';
import college from "../assets/college.jpg";

const LeaveStatus = () => {
  const [leaveApplications, setLeaveApplications] = useState([]);

  useEffect(() => {
    // Fetch leave applications from localStorage
    const storedLeaves = JSON.parse(localStorage.getItem("leaves")) || [];
    setLeaveApplications(storedLeaves);
  }, []);

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
    <div className="leave-page">
      <div className="leave-container">
        <h2 className="title">Leave Status</h2>
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>Leave Type</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>From Time</th>
                <th>To Time</th>
                <th>Reason</th>
                <th>Approval Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveApplications.length > 0 ? (
                leaveApplications.map((leave, index) => (
                  <tr key={index}>
                    <td>{leave.leaveType}</td>
                    <td>{leave.fromDate}</td>
                    <td>{leave.toDate}</td>
                    <td>{leave.fromTime}</td>
                    <td>{leave.toTime}</td>
                    <td>{leave.reason}</td>
                    <td className={`status ${leave.status.toLowerCase()}`}>{leave.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: "center" }}>No leave applications found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LeaveStatus;
