import mongoose from 'mongoose';
const UnitofMeasureSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const ProductSchema = new mongoose.Schema(
  {
    productid: {
      type: Number,
      required: true,
      unique: true,
    },
    productname: {
      type: String,
      required: true,
    },
    suppliers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
      },
    ],
    units: {
      type: UnitofMeasureSchema,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', ProductSchema);
