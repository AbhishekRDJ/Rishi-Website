import mongoose from "mongoose";

const ConnectDb = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
            .then(() => console.log('MongoDB connected'))
            .catch(err => console.error('MongoDB connection error:', err));

        console.log("Database is connneted!")

    } catch (error) {
        console.log(error, "while connecting the db")
        process.exit(1)
    }
}
export default ConnectDb;