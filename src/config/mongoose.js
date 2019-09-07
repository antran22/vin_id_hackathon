import mongoose from "mongoose";

mongoose
    .connect("mongodb://localhost:27017/vin_id", { useNewUrlParser: true })
    .then(() => console.log("Database connected"))
    .catch(() => console.error("Unable to connect to database"));
