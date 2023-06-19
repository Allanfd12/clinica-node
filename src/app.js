import Express from "express";

const app = Express();

const livros = [
    {id : 1, titulo : "O Senhor dos Anéis", autor : "J. R. R. Tolkien"},
    {id : 2, titulo : "Harry Potter", autor : "J. K. Rowling"},
    {id : 3, titulo : "As Crônicas de Nárnia", autor : "C. S. Lewis"}
];

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

export default app;