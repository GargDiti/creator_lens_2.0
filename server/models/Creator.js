import mongoose from 'mongoose';

const platformStatsSchema = new mongoose.Schema({
  platform: { type: String, enum: ['instagram', 'youtube'], required: true },
  followers: Number,
  avgLikes: Number,
  engagementRate: Number,
  growthRate: Number,
  lastUpdated: { type: Date, default: Date.now }
});

const creatorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  niche: { type: String, required: true },
  description: String,
  location: String,
  avatarUrl: String,
  authenticityScore: Number,
  platforms: [platformStatsSchema],
  insights: String,
  tags: [String]
}, { timestamps: true });

export default mongoose.model('Creator', creatorSchema);

