import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema(
  {
    attendee: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    purchaseDate: { type: Date, required: true },
    eventdate: { type: Date, required: true },
    tickettype: { type: String, required: true },
  },
  { timestamps: true }
);

export const Ticket = mongoose.model('Ticket', TicketSchema);
