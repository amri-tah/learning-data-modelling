import mongoose from 'mongoose';
const CommentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  comment: {
    type: String,
    required: true,
  },
});
const PostSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    content: [
      {
        image: {
          type: String,
          required: true,
        },
      },
    ],
    caption: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    comments: [
      {
        type: CommentSchema,
      },
    ],
  },
  { timestamps: true }
);

export const Post = mongoose.model('Post', PostSchema);
