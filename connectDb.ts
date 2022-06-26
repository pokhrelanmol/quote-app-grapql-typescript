import mongoose from "mongoose";
const { config } = require("dotenv");
config();
const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI as string, () =>
            console.log("mongoDB connected")
        );
    } catch (err: any) {
        console.error(err.message);
        process.exit(1);
    }
};
export default connectDB;
