import mongoose, { Schema } from "mongoose";
const QuoteSchema = new Schema({
    title: String,
    by: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});
export default mongoose.model("Quote", QuoteSchema);
