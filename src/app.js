import express from 'express'
import databaseConnection from "./config/db-connect.js"
import routes from "./routes/index.js"

const connection = await databaseConnection();
connection.on("error", (error) => {
    console.error("Erro de conexão", error)
})

connection.once("open", async () => {
    console.log("Database connection initialized.")
})

const app = express();
routes(app)

export default app;