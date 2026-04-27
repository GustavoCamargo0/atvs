let filmes = [{id: 1, nome: "O Poderoso Chefão", genero: "Crime"},
            {id: 2, nome: "O Senhor dos Anéis: O Retorno do Rei", genero: "Fantasia"},
            {id: 3, nome: "Pulp Fiction", genero: "Crime"}];

const express = require('express');
const app = express();
app.use(express.json());

app.get('/filmes', (req, res) => {
    res.json(filmes);
});

app.get('/filmes/:genero', (req, res) => {
    const { genero } = req.params;
    const filmesFiltrados = filmes.filter(filme => filme.genero === genero);
    res.json(filmesFiltrados);
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

