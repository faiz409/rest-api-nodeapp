import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, requiresd: true },
    email: { type: String, requiresd: true, unique: true },
    password: { type: String, requiresd: true },
    role: { type: String, default: 'customer' },
}, { timestamps: true });

export default mongoose.model('User', userSchema, 'users');