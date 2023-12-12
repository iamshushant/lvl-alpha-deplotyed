import mongoose from "mongoose";

const healthSchema = new mongoose.Schema({
  device_id: {
    type: String,
    required: true,
    // unique: true,
  },
  temperature: {
    type: String,
    // required: true,
  },
  spo2: {
    type: String,
    // required: true,
  },
  blood_pressure: {
    type: String,
    // required: true,
  },
  health_score: {
    type: String,
    // required: true,
  },
  weakness: {
    type: String,
    // required: true,
  },
});

export default mongoose.model("healthdatas", healthSchema);
