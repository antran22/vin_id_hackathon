import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = mongoose.Schema({
    password: {
        type: String,
    },
    hashed: {
        type: Boolean,
        default: false,
    },
    name: {
        type: String,
    },
    vin_id: {
        type: String,
        index: true,
    },
    owned_book: {
        type: Array,
        default: [],
    },
    phone: {
        type: String,
    },
});

async function preSave(next) {
    if (!this.password || this.hashed) {
        return;
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    this.hashed = true;
    next();
}

UserSchema.pre("save", preSave);
export async function comparePassword(password, user) {
    return bcrypt.compare(password, user.password);
}

const User = mongoose.model("User", UserSchema);
export default User;
