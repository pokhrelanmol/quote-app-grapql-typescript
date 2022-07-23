import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});
export default mongoose.model("User", UserSchema);
