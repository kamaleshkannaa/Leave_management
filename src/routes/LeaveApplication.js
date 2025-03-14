// import Leave from "../models/Leave.js";

// // Apply for Leave
// export const applyLeave = async (req, res) => {
//   try {
//     const { studentId, studentName, startDate, endDate, reason } = req.body;

//     if (!studentId || !studentName || !startDate || !endDate || !reason) {
//       return res.status(400).json({ message: "All fields are required!" });
//     }

//     const newLeave = new Leave({ studentId, studentName, startDate, endDate, reason, status: "Pending" });
//     await newLeave.save();

//     res.status(201).json({ message: "✅ Leave request submitted!", leave: newLeave });
//   } catch (error) {
//     console.error("❌ Error applying for leave:", error);
//     res.status(500).json({ message: "❌ Server Error" });
//   }
// };

// // Get All Leave Requests
// export const getAllLeaves = async (req, res) => {
//   try {
//     const leaves = await Leave.find();
//     res.status(200).json(leaves);
//   } catch (error) {
//     console.error("❌ Error fetching leave requests:", error);
//     res.status(500).json({ message: "❌ Server Error" });
//   }
// };


import mongoose from "mongoose";

const applyForLeave = async (leaveData) => {
  try {
    console.log("📡 Sending leave request:", leaveData);

    const response = await axios.post("http://localhost:5000/api/leave/apply", leaveData, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("✅ Response from server:", response.data);
    
    if (response.status === 201 || response.status === 200) {
      alert("✅ Leave request submitted successfully!");
    } else {
      alert("⚠ Something went wrong!");
    }
  } catch (error) {
    console.error("❌ Failed to apply for leave:", error.response?.data || error.message);
    alert("❌ Failed to apply for leave!");
  }
};


export default mongoose.model("LeaveApplication", LeaveApplicationSchema);
