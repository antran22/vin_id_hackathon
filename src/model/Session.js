import mongoose from "mongoose";
import User from "./User";

const SessionSchema = mongoose.Schema({
    id: {
        type: String,
        index: true,
    },
    loggedIn: Boolean,
    createdAt: { type: Date, expires: 3600 },
});
const Session = mongoose.model("Session", SessionSchema);
export default Session;
