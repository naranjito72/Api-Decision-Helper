import mongoose from 'mongoose';
import usuarioSchema from './schema.mjs';

export default mongoose.model("Usuarios", usuarioSchema);