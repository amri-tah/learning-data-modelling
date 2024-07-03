import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    booksWritten: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
      },
    ],
  },
  { timestamps: true }
);

export const Author = mongoose.model('Author', AuthorSchema);
