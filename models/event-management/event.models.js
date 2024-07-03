import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }],
    location: {
      type: String,
      required: true,
    },
    date: [
      {
        type: Date,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export const Event = mongoose.model('Event', EventSchema);
