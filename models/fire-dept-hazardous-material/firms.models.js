import mongoose from 'mongoose';

const FirmSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    inspectionDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);
export const Firm = mongoose.model('Firm', FirmSchema);
