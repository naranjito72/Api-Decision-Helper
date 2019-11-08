import mongoose from 'mongoose';
import positivoSchema from './schema.mjs';

export default mongoose.model("Positivos", positivoSchema);