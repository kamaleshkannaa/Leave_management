
    // import React, { useState } from "react";
    // import { useNavigate } from "react-router-dom";
    // import axios from "axios";
    // import "./Dashbord.css";
    // import college from "../assets/college.jpg";
    
    // const Dashboard = () => {
    //   const navigate = useNavigate();
    //   const [leaveType, setLeaveType] = useState("");
    //   const [fromDate, setFromDate] = useState("");
    //   const [fromTime, setFromTime] = useState("");
    //   const [toDate, setToDate] = useState("");
    //   const [toTime, setToTime] = useState("");
    //   const [reason, setReason] = useState("");
    //   const [activityId, setActivityId] = useState("");
    
    //   // ✅ Ensure function is properly defined inside the component
    //   const handleLeaveTypeChange = (e) => {
    //     const selectedLeaveType = e.target.value;
    //     setLeaveType(selectedLeaveType);
    //     if (selectedLeaveType === "3") setActivityId("");
    //   };
    
    //   const handleFormSubmit = async (e) => {
    //     e.preventDefault();
    
    //     // Validate required fields
    //     if (!leaveType || !fromDate || !fromTime || !toDate || !toTime || !reason) {
    //       alert("❌ Please fill in all required fields.");
    //       return;
    //     }
    
    //     // Extra validation for activityId (if required)
    //     if (leaveType !== "3" && leaveType !== "" && !activityId) {
    //       alert("❌ Activity ID is required for this leave type.");
    //       return;
    //     }
    
    //     try {
    //       const response = await axios.post("http://localhost:5000/api/leave/apply", {
    //         studentId: "67890",
    //         studentName: "KAMALESH KANNAA",
    //         leaveType,
    //         startDate: fromDate,
    //         fromTime,
    //         endDate: toDate,
    //         toTime,
    //         reason,
    //         status: "Pending",
    //         activityId: leaveType !== "3" ? activityId : undefined, // Only include if required
    //       });
    
    //       alert("✅ Leave applied successfully!");
    //       navigate("/leave-status");
    //     } catch (error) {
    //       console.error("❌ Error applying for leave:", error);
    //       alert(error.response?.data?.message || "❌ Failed to apply for leave!");
    //     }
    //   };
    
    //   return (
    //     <div
    //       className="dashboard-page"
    //       style={{
    //         backgroundImage: `url(${college})`,
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //         height: "100vh",
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         padding: "10px",
    //       }}
    //     >
    //       <div className="dashboard-container">
    //         <h2 className="title">Leave Apply</h2>
    //         <div className="content">
    //           <form id="leave_form" onSubmit={handleFormSubmit}>
    //             <div className="user-details">
    //               <div className="input-box">
    //                 <span className="details">Leave Type</span>
    //                 <select id="leave_type" value={leaveType} onChange={handleLeaveTypeChange} required>
    //                   <option value="">--Select--</option>
    //                   <option value="3">Leave</option>
    //                   <option value="11">ON DUTY</option>
    //                   <option value="17">INTERNAL OD</option>
    //                   <option value="24">Internal Training</option>
    //                 </select>
    //               </div>
    //               <div className="input-box">
    //                 <span className="details">From Date</span>
    //                 <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} required />
    //               </div>
    //               <div className="input-box">
    //                 <span className="details">From Time</span>
    //                 <input type="time" value={fromTime} onChange={(e) => setFromTime(e.target.value)} required />
    //               </div>
    //               <div className="input-box">
    //                 <span className="details">To Date</span>
    //                 <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} required />
    //               </div>
    //               <div className="input-box">
    //                 <span className="details">To Time</span>
    //                 <input type="time" value={toTime} onChange={(e) => setToTime(e.target.value)} required />
    //               </div>
    //               <div className="input-box">
    //                 <span className="details">Reason</span>
    //                 <textarea value={reason} onChange={(e) => setReason(e.target.value)} required></textarea>
    //               </div>
    
    //               {leaveType !== "3" && leaveType !== "" && (
    //                 <div className="input-box">
    //                   <label htmlFor="act_id">
    //                     <span className="mandatory">*</span>Activity Id:
    //                   </label>
    //                   <input type="text" value={activityId} onChange={(e) => setActivityId(e.target.value)} required />
    //                 </div>
    //               )}
    //             </div>
    //             <div className="center-button">
    //               <button type="submit">Submit</button>
    //             </div>
    //             <div className="check-button-container">
    //               <button type="button" onClick={() => navigate("/leave-status")}>Check Status</button>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // };
    
    // export default Dashboard;
    


// 
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import "./Dashbord.css";
// import college from "../assets/college.jpg";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [leaveType, setLeaveType] = useState("");
//   const [fromDate, setFromDate] = useState("");
//   const [fromTime, setFromTime] = useState("");
//   const [toDate, setToDate] = useState("");
//   const [toTime, setToTime] = useState("");
//   const [reason, setReason] = useState("");
//   const [activityId, setActivityId] = useState("");
//   const [user, setUser] = useState(null);

//   // ✅ Get authenticated user
//   useEffect(() => {
//     const auth = getAuth();
//     onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//   }, []);

//   // ✅ Handle Leave Type Change
//   const handleLeaveTypeChange = (e) => {
//     const selectedLeaveType = e.target.value;
//     setLeaveType(selectedLeaveType);
//     if (selectedLeaveType === "3") setActivityId("");
//   };

//   // ✅ Handle Form Submission
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     if (!user) {
//       alert("❌ Please log in to apply for leave.");
//       return;
//     }

//     if (!leaveType || !fromDate || !fromTime || !toDate || !toTime || !reason) {
//       alert("❌ Please fill in all required fields.");
//       return;
//     }

//     if (leaveType !== "3" && leaveType !== "" && !activityId) {
//       alert("❌ Activity ID is required for this leave type.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/api/leave/apply", {
//         studentId: user.uid, // Get Firebase UID
//         studentName: user.displayName, // Get Name from Firebase
//         leaveType,
//         startDate: fromDate,
//         fromTime,
//         endDate: toDate,
//         toTime,
//         reason,
//         status: "Pending",
//         activityId: leaveType !== "3" ? activityId : undefined,
//       });

//       alert("✅ Leave applied successfully!");
//       navigate("/leave-status");
//     } catch (error) {
//       console.error("❌ Error applying for leave:", error);
//       alert(error.response?.data?.message || "❌ Failed to apply for leave!");
//     }
//   };

//   return (
//     <div
//       className="dashboard-page"
//       style={{
//         backgroundImage: `url(${college})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "10px",
//       }}
//     >
//       <div className="dashboard-container">
//         <h2 className="title">Leave Apply</h2>
//         <div className="content">
//           <form id="leave_form" onSubmit={handleFormSubmit}>
//             <div className="user-details">
//               <div className="input-box">
//                 <span className="details">Leave Type</span>
//                 <select id="leave_type" value={leaveType} onChange={handleLeaveTypeChange} required>
//                   <option value="">--Select--</option>
//                   <option value="3">Leave</option>
//                   <option value="11">ON DUTY</option>
//                   <option value="17">INTERNAL OD</option>
//                   <option value="24">Internal Training</option>
//                 </select>
//               </div>
//               <div className="input-box">
//                 <span className="details">From Date</span>
//                 <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} required />
//               </div>
//               <div className="input-box">
//                 <span className="details">From Time</span>
//                 <input type="time" value={fromTime} onChange={(e) => setFromTime(e.target.value)} required />
//               </div>
//               <div className="input-box">
//                 <span className="details">To Date</span>
//                 <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} required />
//               </div>
//               <div className="input-box">
//                 <span className="details">To Time</span>
//                 <input type="time" value={toTime} onChange={(e) => setToTime(e.target.value)} required />
//               </div>
//               <div className="input-box">
//                 <span className="details">Reason</span>
//                 <textarea value={reason} onChange={(e) => setReason(e.target.value)} required></textarea>
//               </div>

//               {leaveType !== "3" && leaveType !== "" && (
//                 <div className="input-box">
//                   <label htmlFor="act_id">
//                     <span className="mandatory">*</span> Activity Id:
//                   </label>
//                   <input type="text" value={activityId} onChange={(e) => setActivityId(e.target.value)} required />
//                 </div>
//               )}
//             </div>
//             <div className="center-button">
//               <button type="submit">Submit</button>
//             </div>
//             <div className="check-button-container">
//               <button type="button" onClick={() => navigate("/leave-status")}>Check Status</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import "./Dashbord.css";
// import college from "../assets/college.jpg";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [leaveType, setLeaveType] = useState("");
//   const [fromDate, setFromDate] = useState("");
//   const [fromTime, setFromTime] = useState("");
//   const [toDate, setToDate] = useState("");
//   const [toTime, setToTime] = useState("");
//   const [reason, setReason] = useState("");
//   const [activityId, setActivityId] = useState("");
//   const [user, setUser] = useState(null);

//   // Get authenticated user
//   useEffect(() => {
//     const auth = getAuth();
//     onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         console.log("Firebase UID:", currentUser.uid); // Debugging
//         setUser(currentUser);
//       }
//     });
//   }, []);

//   // Handle leave type change
//   const handleLeaveTypeChange = (e) => {
//     const selectedLeaveType = e.target.value;
//     setLeaveType(selectedLeaveType);
//     if (selectedLeaveType === "3") setActivityId("");
//   };

//   // Handle form submission
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     if (!user) {
//       alert("❌ Please log in to apply for leave.");
//       return;
//     }

//     if (!leaveType || !fromDate || !fromTime || !toDate || !toTime || !reason) {
//       alert("❌ Please fill in all required fields.");
//       return;
//     }

//     if (leaveType !== "3" && activityId.trim() === "") {
//       alert("❌ Activity ID is required for this leave type.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/leave/apply",
//         {
//           studentId: user.uid,
//           studentName: user.displayName,
//           leaveType,
//           startDate: fromDate,
//           fromTime,
//           endDate: toDate,
//           toTime,
//           reason,
//           status: "Pending",
//           activityId: leaveType !== "3" ? activityId : undefined,
//         }
//       );

//       alert("✅ Leave applied successfully!");
//       navigate("/leave-status");
//     } catch (error) {
//       console.error("❌ API Error:", error.response || error.message);
//       alert(
//         error.response?.data?.message ||
//           "❌ Failed to apply for leave! Check console for details."
//       );
//     }
//   };

//   return (
//     <div
//       className="dashboard-page"
//       style={{
//         backgroundImage: `url(${college})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "10px",
//       }}
//     >
//       <div className="dashboard-container">
//         <h2 className="title">Leave Application</h2>
//         <div className="content">
//           <form id="leave_form" onSubmit={handleFormSubmit}>
//             <div className="user-details">
//               {/* Leave Type Dropdown */}
//               <div className="input-box">
//                 <span className="details">Leave Type</span>
//                 <select
//                   id="leave_type"
//                   value={leaveType}
//                   onChange={handleLeaveTypeChange}
//                   required
//                 >
//                   <option value="">--Select--</option>
//                   <option value="3">Leave</option>
//                   <option value="11">ON DUTY</option>
//                   <option value="17">INTERNAL OD</option>
//                   <option value="24">Internal Training</option>
//                 </select>
//               </div>

//               {/* From Date */}
//               <div className="input-box">
//                 <span className="details">From Date</span>
//                 <input
//                   type="date"
//                   value={fromDate}
//                   min={new Date().toISOString().split("T")[0]}
//                   onChange={(e) => setFromDate(e.target.value)}
//                   required
//                 />
//               </div>

//               {/* From Time */}
//               <div className="input-box">
//                 <span className="details">From Time</span>
//                 <input
//                   type="time"
//                   value={fromTime}
//                   onChange={(e) => setFromTime(e.target.value)}
//                   required
//                 />
//               </div>

//               {/* To Date */}
//               <div className="input-box">
//                 <span className="details">To Date</span>
//                 <input
//                   type="date"
//                   value={toDate}
//                   min={fromDate || new Date().toISOString().split("T")[0]}
//                   onChange={(e) => setToDate(e.target.value)}
//                   required
//                 />
//               </div>

//               {/* To Time */}
//               <div className="input-box">
//                 <span className="details">To Time</span>
//                 <input
//                   type="time"
//                   value={toTime}
//                   onChange={(e) => setToTime(e.target.value)}
//                   required
//                 />
//               </div>

//               {/* Reason */}
//               <div className="input-box">
//                 <span className="details">Reason</span>
//                 <textarea
//                   value={reason}
//                   onChange={(e) => setReason(e.target.value)}
//                   required
//                 ></textarea>
//               </div>

//               {/* Activity ID (Conditional) */}
//               {leaveType !== "3" && leaveType !== "" && (
//                 <div className="input-box">
//                   <label htmlFor="act_id">
//                     <span className="mandatory">*</span> Activity ID:
//                   </label>
//                   <input
//                     type="text"
//                     value={activityId}
//                     onChange={(e) => setActivityId(e.target.value)}
//                     required
//                   />
//                 </div>
//               )}
//             </div>

//             {/* Submit Button */}
//             <div className="center-button">
//               <button
//                 type="submit"
//                 disabled={
//                   !leaveType ||
//                   !fromDate ||
//                   !toDate ||
//                   !reason ||
//                   (leaveType !== "3" && !activityId)
//                 }
//               >
//                 Submit
//               </button>
//             </div>

//             {/* Check Status Button */}
//             <div className="check-button-container">
//               <button type="button" onClick={() => navigate("/leave-status")}>
//                 Check Status
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./Dashbord.css";
import college from "../assets/college.jpg";

const Dashboard = () => {
  const navigate = useNavigate();
  const [leaveType, setLeaveType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toDate, setToDate] = useState("");
  const [toTime, setToTime] = useState("");
  const [reason, setReason] = useState("");
  const [activityId, setActivityId] = useState("");
  const [user, setUser] = useState(null);

  // Get authenticated user
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("Firebase UID:", currentUser.uid);
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, []);

  // Handle leave type change
  const handleLeaveTypeChange = (e) => {
    const selectedLeaveType = e.target.value;
    setLeaveType(selectedLeaveType);
    if (selectedLeaveType === "3") setActivityId("");
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("❌ Please log in to apply for leave.");
      return;
    }

    if (!leaveType || !fromDate || !fromTime || !toDate || !toTime || !reason) {
      alert("❌ Please fill in all required fields.");
      return;
    }

    if (leaveType !== "3" && activityId.trim() === "") {
      alert("❌ Activity ID is required for this leave type.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/leave/apply", {
        studentId: user.uid,
        studentName: user.displayName || "Unknown",
        leaveType,
        startDate: fromDate,
        fromTime,
        endDate: toDate,
        toTime,
        reason,
        status: "Pending",
        activityId: leaveType !== "3" ? activityId : null,
      });

      alert("✅ Leave applied successfully!");
      navigate("/leave-status");
    } catch (error) {
      console.error("❌ API Error:", error.response || error.message);
      alert(error.response?.data?.message || "❌ Failed to apply for leave!");
    }
  };

  return (
    <div className="dashboard-page" style={{ backgroundImage: `url(${college})` }}>
      <div className="dashboard-container">
        <h2 className="title">Leave Application</h2>
        <form id="leave_form" onSubmit={handleFormSubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Leave Type</span>
              <select id="leave_type" value={leaveType} onChange={handleLeaveTypeChange} required>
                <option value="">--Select--</option>
                <option value="3">Leave</option>
                <option value="11">ON DUTY</option>
                <option value="17">INTERNAL OD</option>
                <option value="24">Internal Training</option>
              </select>
            </div>

            <div className="input-box">
              <span className="details">From Date</span>
              <input type="date" value={fromDate} min={new Date().toISOString().split("T")[0]} onChange={(e) => setFromDate(e.target.value)} required />
            </div>

            <div className="input-box">
              <span className="details">From Time</span>
              <input type="time" value={fromTime} onChange={(e) => setFromTime(e.target.value)} required />
            </div>

            <div className="input-box">
              <span className="details">To Date</span>
              <input type="date" value={toDate} min={fromDate || new Date().toISOString().split("T")[0]} onChange={(e) => setToDate(e.target.value)} required />
            </div>

            <div className="input-box">
              <span className="details">To Time</span>
              <input type="time" value={toTime} onChange={(e) => setToTime(e.target.value)} required />
            </div>

            <div className="input-box">
              <span className="details">Reason</span>
              <textarea value={reason} onChange={(e) => setReason(e.target.value)} required></textarea>
            </div>

            {leaveType !== "3" && leaveType !== "" && (
              <div className="input-box">
                <label htmlFor="act_id"><span className="mandatory">*</span> Activity ID:</label>
                <input type="text" value={activityId} onChange={(e) => setActivityId(e.target.value)} required />
              </div>
            )}
          </div>

          <div className="center-button">
            <button type="submit">Submit</button>
          </div>

          <div className="check-button-container">
            <button type="button" onClick={() => navigate("/leave-status")}>Check Status</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard; 
