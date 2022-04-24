import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const historySchema = new Schema({
  created_at: { type: Date, default: Date.now },
  user_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  items: [{
    _id: { type: Schema.Types.ObjectId, required: true },
    product_id: { type: Schema.Types.ObjectId, required: true, ref: 'Post' },
  }],
});

export default model('History', historySchema);
