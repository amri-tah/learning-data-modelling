import mongoose from 'mongoose';

const SubTodoSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model('SubTodo', SubTodoSchema);
