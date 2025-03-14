import mongoose from "mongoose";

const LeaveSchema = new mongoose.Schema({
  studentId: { type: String, required: true }, // ✅ Ensure studentId is required
  leaveType: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  fromTime: { type: String, required: true },
  toTime: { type: String, required: true },
  reason: { type: String, required: true },
  status: { type: String, default: "Pending" },
  activityId: { type: String, required: function () { return this.leaveType !== "3"; } }, // Only required for OD
});

export default mongoose.model("Leave", LeaveSchema);
