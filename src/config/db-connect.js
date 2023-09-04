import mongoose from "mongoose";

async function databaseConnection() {
    mongoose.connect("mongodb://localhost:27017")
    return mongoose.connection;
}

export default databaseConnection;
