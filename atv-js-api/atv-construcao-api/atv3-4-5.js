let clientes = [];

const express = require('express');
const app = express();
app.use(express.json());

app.get('/clientes', (req, res) => {
    res.json(clientes);
});

app.get('/clientes/:id', (req, res) => {
    const { id } = req.params;
    const cliente = clientes.find(c => c.id === parseInt(id));
    if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    res.json(cliente);
});

app.post('/clientes', (req, res) => {
    const { nome, email } = req.body;
    if (clientes.some(cliente => cliente.email === email)) {
        return res.status(400).json({ error: 'Email já cadastrado' });
    }
    const novoCliente = { id: clientes.length + 1, nome, email };
    clientes.push(novoCliente);
    res.status(201).json(novoCliente);
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

