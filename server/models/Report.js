import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'Creator', required: true },
  title: { type: String, required: true },
  insights: [String],
  recommendation: String,
  status: { type: String, enum: ['queued', 'processing', 'completed'], default: 'completed' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Report', reportSchema);

