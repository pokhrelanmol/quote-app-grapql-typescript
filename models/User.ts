import mongoose, { Schema } from "mongoose";
export interface IUser {
    [x: string]: any;
    firstName: String;
    lastName: String;
    email: String;
    password: String;
}
const UserSchema = new Schema<IUser>({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});
export default mongoose.model<IUser>("User", UserSchema);
