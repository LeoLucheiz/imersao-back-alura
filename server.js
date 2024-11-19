import express from "express";

const app = express();
//app.listen(3000, () => {
  //  console.log("Servidor escutando...");
//});

app.get("/api", (req, res)=>{
    res.send("Bem vindo a minha imersão");
})


app.get("/livro", (req, res)=> {
    const livro = {
        titulo: "Harry Potter",
        autorDoLivro:"J. K. Rowling",
        anoDePublicacao: 1977
    };
   res.json(livro);
});

app.listen(3000,()=> {
    console.log("Servidor escutando a porta 3000");
});
