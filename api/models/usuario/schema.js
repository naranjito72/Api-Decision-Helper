import mongoose from 'mongoose';
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  //_id: Schema.ObjectId,
  email: { type: String, required: true, trim: true, unique: true, lowercase:true },
  password: { type: String, required: true, select: false },
  name: { type: String, unique: true, trim: true}
});

usuarioSchema.pre("save", async function() {
  this.name = this.name.toUpperCase();
  this.password = await bcrypt.hash(this.password, 10);
});

export default usuarioSchema;
