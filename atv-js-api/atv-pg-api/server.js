
const express = require('express');
const app = express();

const pool = require('./db'); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let livros = [];


app.post('/livros', async (req, res) => {
  const { titulo, autor, ano_publicacao, disponivel } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO livros (titulo, autor, ano_publicacao) VALUES ($1, $2, $3) RETURNING *',
      [titulo, autor, ano_publicacao]
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

app.get('/livros', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM livros');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

app.get('/livros/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM livros WHERE id = $1', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

app.get('/livros/autor/:autor', async (req, res) => {
  const { autor } = req.params;

  try {
    const result = await pool.query('SELECT * FROM livros WHERE autor = $1', [autor]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });    
  }
});

app.delete('/livros/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM livros WHERE id = $1', [id]);

    const result = await pool.query('SELECT * FROM livros');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

app.put('/livros/:id', async (req, res) => {
  const { id } = req.params;
  const {  titulo, autor, ano_publicacao, disponivel } = req.body;
    try {
      const result = await pool.query(
        'UPDATE livros SET titulo = $1, autor = $2, ano_publicacao = $3, disponivel = $4 WHERE id = $5 RETURNING *',
        [titulo, autor, ano_publicacao, disponivel, id]
      );
      res.json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});