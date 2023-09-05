import mongoose from "mongoose";

async function databaseConnection() {
    mongoose.connect(process.env.DATABASE_URL)
    return mongoose.connection;
}

export default databaseConnection;
