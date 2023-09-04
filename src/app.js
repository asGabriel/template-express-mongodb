import express from 'express'
import databaseConnection from "./config/db-connect.js"

const connection = await databaseConnection();

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("entrou na rota padrão");
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso")
})

export default app;