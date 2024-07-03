import mongoose from 'mongoose';
const SupplierSchema = new mongoose.Schema(
  {
    supplierid: {
      type: Number,
      required: true,
      unique: true,
    },
    suppliername: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Supplier = mongoose.model('Supplier', SupplierSchema);
