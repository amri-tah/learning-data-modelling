import mongoose from 'mongoose';
const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Others"],
    required: true
  },
  address: {
    type: String
  },
  bloodType: {
    type: String,
    required: true
  },
  diagnosed: {
    type: String,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref = "Doctor"
  },
  admittedAt: {
    type: mongoose.Schema.Types.ObjectId,
    ref = "Hospital"
  }
}, { timestamps: true });
export const Patient = mongoose.model('Patient', PatientSchema);
