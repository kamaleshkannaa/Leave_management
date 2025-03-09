import React, { useEffect, useState } from 'react';
import './LeaveStatus.css'; // Use the same styling as LeaveStatus
import college from "../assets/college.jpg";

const TeacherDashboard = () => {
  const [leaveApplications, setLeaveApplications] = useState([]);

  useEffect(() => {
    // Fetch leave applications from localStorage
    const storedLeaves = JSON.parse(localStorage.getItem("leaves")) || [];
    setLeaveApplications(storedLeaves);
  }, []);

  const handleLeaveAction = (index, status) => {
    // Update leave status
    const updatedLeaves = [...leaveApplications];
    updatedLeaves[index].status = status;

    // Save back to localStorage
    localStorage.setItem("leaves", JSON.stringify(updatedLeaves));
    setLeaveApplications(updatedLeaves);
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
      <div className="leave-page">
        <div className="leave-container">
          <h2 className="title">Teacher Dashboard - Leave Requests</h2>
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
                  <th>Actions</th>
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
                      <td>
                        {leave.status === "Pending" ? (
                          <>
                            <button
                              className="approve-btn"
                              onClick={() => handleLeaveAction(index, "Approved")}
                            >
                              Approve
                            </button>
                            <button
                              className="reject-btn"
                              onClick={() => handleLeaveAction(index, "Rejected")}
                            >
                              Reject
                            </button>
                          </>
                        ) : (
                          <span className={`status ${leave.status.toLowerCase()}`}>
                            {leave.status}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" style={{ textAlign: "center" }}>
                      No leave requests available
                    </td>
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

export default TeacherDashboard;
