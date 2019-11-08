import mongoose from 'mongoose';
import negativoSchema from './schema.mjs';

export default mongoose.model("Negativos", negativoSchema);