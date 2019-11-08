import mongoose from 'mongoose';
import preguntaSchema from './schema.mjs';

export default mongoose.model("Preguntas", preguntaSchema);
