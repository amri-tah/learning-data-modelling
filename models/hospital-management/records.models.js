import mongoose from 'mongoose';
const RecordSchema = new mongoose.Schema({}, { timestamps: true });
export const Record = mongoose.model('Record', RecordSchema);
