import mongoose from 'mongoose';
const InventorySchema = new mongoose.Schema(
  {
    inventoryId: {
      type: Number,
      required: true,
      unique: true,
    },
    firmId: {
      type: Number,
      required: true,
    },
    materialId: {
      type: Number,
      required: true,
    },
    numberOfUnits: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Inventory = mongoose.model('Inventory', InventorySchema);
