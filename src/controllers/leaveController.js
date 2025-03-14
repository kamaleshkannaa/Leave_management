import Leave from "../models/Leave.js";

// Apply for leave
export const applyLeave = async (req, res) => {
  try {
    const { studentId, reason, startDate, endDate } = req.body;

    if (!studentId || !reason || !startDate || !endDate) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const newLeave = new Leave({ studentId, reason, startDate, endDate, status: "Pending" });
    await newLeave.save();
    
    res.status(201).json({ message: "Leave request submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
