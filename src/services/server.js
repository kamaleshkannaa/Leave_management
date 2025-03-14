// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";
// import Leave from "./models/Leave.js";
// import leaveRoutes from "./routes/LeaveApplication.js";


// app.use("/api/leave", leaveRoutes);


// dotenv.config({ path: "../../config.env" });

// console.log("MONGO_URI:", process.env.MONGO_URI || "❌ Not Loaded");

// const app = express();
// const PORT = process.env.PORT || 5001;

// app.use(express.json());
// app.use(cors());

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ Connected to MongoDB Atlas"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // ✅ Test Route
// app.get("/", (req, res) => {
//   res.send("🚀 Leave Management System API is running!");
// });

// // ✅ Apply for Leave (Student)
// app.post("/apply-leave", async (req, res) => {
//   try {
//     const { studentName, studentId, reason, startDate, endDate } = req.body;
//     const newLeave = new Leave({ studentName, studentId, reason, startDate, endDate });
//     await newLeave.save();
//     res.status(201).json({ message: "Leave applied successfully", leave: newLeave });
//   } catch (error) {
//     res.status(500).json({ error: "Error applying for leave" });
//   }
// });

// // ✅ View Leave Requests (Student)
// app.get("/leaves", async (req, res) => {
//   try {
//     const leaves = await Leave.find();
//     res.status(200).json(leaves);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching leave requests" });
//   }
// });

// // ✅ Approve/Reject Leave (Teacher)
// app.put("/leave/:id", async (req, res) => {
//   try {
//     const { status } = req.body;
//     if (!["Approved", "Rejected"].includes(status)) {
//       return res.status(400).json({ error: "Invalid status update" });
//     }
//     const updatedLeave = await Leave.findByIdAndUpdate(req.params.id, { status }, { new: true });
//     if (!updatedLeave) return res.status(404).json({ error: "Leave request not found" });
//     res.json({ message: `Leave request ${status.toLowerCase()}`, leave: updatedLeave });
//   } catch (error) {
//     res.status(500).json({ error: "Error updating leave status" });
//   }
// });

// // ✅ Start Server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });



// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import leaveRoutes from "../routes/leaveRoutes.js";

// dotenv.config({ path: "./src/services/config.env" });

// const app = express();
// const PORT = process.env.PORT || 5000;

// // ✅ Middleware (Fixes JSON parsing error)
// app.use(cors());
// app.use(express.json()); // 🛠️ Add this to parse incoming JSON requests

// // ✅ Debugging Request Body
// app.use((req, res, next) => {
//   console.log("📩 Incoming Request:", req.method, req.url);
//   console.log("📦 Request Body:", req.body);
//   next();
// });

// // ✅ Register API Routes
// app.use("/api/leave", leaveRoutes);

// // ✅ MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI, { dbName: "leavemanagement" })
//   .then(() => console.log("✅ Connected to MongoDB Atlas"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// // ✅ Start Server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });




// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import leaveRoutes from "../routes/leaveRoutes.js"; // ✅ Ensure correct path

// dotenv.config({ path: "./src/services/config.env" });

// const app = express();
// const PORT = process.env.PORT || 5000;

// // ✅ Middleware
// app.use(express.json());
// app.use(cors({ origin: "http://localhost:5173" })); // Allow frontend requests

// // ✅ Register API Routes
// app.use("/api/leave", leaveRoutes);

// // ✅ MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI, { dbName: "leavemanagement" })
//   .then(() => console.log("✅ Connected to MongoDB Atlas"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// // ✅ Test API Endpoint
// app.get("/", (req, res) => {
//   res.send("🚀 Leave Management System API is running!");
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });


// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import leaveRoutes from "../routes/leaveRoutes.js";

// dotenv.config({ path: "./src/services/config.env" });

// const app = express();
// const PORT = process.env.PORT || 5000;

// // ✅ Middleware
// app.use(express.json());
// app.use(cors({ origin: "http://localhost:5173" })); // Allow frontend requests

// // ✅ Register API Routes
// app.use("/api/leave", leaveRoutes);

// // Debugging: List all registered routes
// app._router.stack.forEach((r) => {
//   if (r.route && r.route.path) {
//     console.log(`${Object.keys(r.route.methods)[0].toUpperCase()} ${r.route.path}`);
//   }
// });

// // ✅ MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI, { dbName: "leavemanagement" })
//   .then(() => console.log("✅ Connected to MongoDB Atlas"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// app.get("/", (req, res) => {
//   res.send("🚀 Leave Management System API is running!");
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import leaveRoutes from "../routes/leaveRoutes.js"; // Ensure correct import path

dotenv.config({ path: "./src/services/config.env" });

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" })); // Allow frontend requests

// ✅ Register API Routes
app.use("/api/leave", leaveRoutes);

// ✅ Debug: List all registered routes
app._router.stack.forEach((r) => {
  if (r.route && r.route.path) {
    console.log(`${Object.keys(r.route.methods)[0].toUpperCase()} ${r.route.path}`);
  }
});

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { dbName: "leavemanagement" })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB Connection Error:", err);
});

mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB Connected Successfully!");
});

app.get("/", (req, res) => {
  res.send("🚀 Leave Management System API is running!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});



