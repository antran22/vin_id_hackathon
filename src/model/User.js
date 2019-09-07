import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = mongoose.Schema({
    password: {
        type: String,
    },
    name: {
        type: String,
    },
    vin_id: {
        type: String,
        index: true,
    },
    owned_book : {
        type: Array,
        default: []
    },
    phone: {
        type: String
    }
});

async function preSave(next) {
    if (!this.password) {
        return;
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
}

UserSchema.pre("save", preSave);
UserSchema.methods.comparePassword = async function comparePassword(password) {
    return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", UserSchema);
export default User;
