import mongoose from 'mongoose';

const OrderItemsSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
    required: true,
  },
});
const OrderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      default: 0,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderItems: [OrderItemsSchema],
    status: {
      type: String,
      enum: ['Pending', 'Cancelled', 'Delivered'],
      default: 'Pending',
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
