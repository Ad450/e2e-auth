import mongoose from "mongoose";

const mongooseSetup = () => {
    try {
        mongoose.connect(process.env.MONGODB || "");
    } catch (error) {
        console.error(error);
    }
}

export default mongooseSetup;