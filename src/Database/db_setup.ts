import mongoose from "mongoose";

// placed here for testing
const mongooseUrl: string = "mongodb+srv://Emmanuel1999:Manu450666@cluster0.ynk8r7l.mongodb.net/test";

const mongooseSetup = () => {
    try {
        mongoose.connect(process.env.MONGODB || mongooseUrl);
    } catch (error) {
        console.log(error);
    }
}

export default mongooseSetup;