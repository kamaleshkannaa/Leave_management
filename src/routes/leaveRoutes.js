// import express from "express";
// import Leave from "../models/Leave.js";

// const router = express.Router();

// // Apply for leave
// router.post("/apply", async (req, res) => {
//   try {
//     if (!req.body.studentId) {
//       return res.status(400).json({ message: "studentId is required" });
//     }

//     const newLeave = new Leave(req.body);
//     await newLeave.save();
//     res.status(201).json(newLeave);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Fetch leave status by student ID
// router.get("/status/:studentId", async (req, res) => {
//   try {
//     const leaves = await Leave.find({ studentId: req.params.studentId });
//     res.status(200).json(leaves);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// export default router;






import express from "express";
import Leave from "../models/LeaveRequest.js"; // Import the Leave model

const router = express.Router();

// ✅ Get all leave requests
router.get("/", async (req, res) => {
  try {
    const leaves = await Leave.find(); // Fetch all leaves from MongoDB
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ error: "Error fetching leave applications" });
  }
});


// ✅ Get leave requests for a specific student (already existing)
router.get("/status/:uid", async (req, res) => {
  try {
    const leaves = await Leave.find({ studentId: req.params.uid });
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ error: "Error fetching student leave requests" });
  }
});

// ✅ Update leave status (NEW: for teacher approval/rejection)
router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const updatedLeave = await Leave.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(updatedLeave);
  } catch (error) {
    res.status(500).json({ error: "Error updating leave status" });
  }
});

export default router;

