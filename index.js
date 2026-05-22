const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

// === CONFIGURAÇÃO DA CONEXÃO COM O MYSQL ===
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',            // Usuário padrão do MySQL
    password: '',
    database: 'api_faculdade'
});

// Conecta de fato ao banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err.message);
        return;
    }
    console.log('Conectado com sucesso ao banco de dados MySQL!');
});

// ==========================================
// ROTA: CLIENTES
// ==========================================

// GET Clientes (Busca do banco)
app.get("/clientes", (req, res) => {
    const sql = "SELECT * FROM clientes";
    db.query(sql, (err, resultados) => {
        if (err) return res.status(500).json({ erro: err.message });
        res.json(resultados);
    });
});

// POST Clientes (Insere no banco)
app.post("/clientes", (req, res) => {
    const { nome, email, telefone, cpf } = req.body;
    const sql = "INSERT INTO clientes (nome, email, telefone, cpf) VALUES (?, ?, ?, ?)";
   
    db.query(sql, [nome, email, telefone, cpf], (err, resultado) => {
        if (err) return res.status(500).json({ erro: err.message });
       
        // Retorna o cliente criado com o ID gerado pelo banco
        res.status(201).json({ id: resultado.insertId, nome, email, telefone, cpf });
    });
});

// ==========================================
// ROTA: FUNCIONÁRIOS
// ==========================================

// GET Funcionários
app.get("/funcionarios", (req, res) => {
    const sql = "SELECT * FROM funcionarios";
    db.query(sql, (err, resultados) => {
        if (err) return res.status(500).json({ erro: err.message });
        res.json(resultados);
    });
});

// POST Funcionários
app.post("/funcionarios", (req, res) => {
    const { nome, telefone, email, cargo, setor } = req.body;
    const sql = "INSERT INTO funcionarios (nome, telefone, email, cargo, setor) VALUES (?, ?, ?, ?, ?)";
   
    db.query(sql, [nome, telefone, email, cargo, setor], (err, resultado) => {
        if (err) return res.status(500).json({ erro: err.message });
       
        res.status(201).json({ id: resultado.insertId, nome, telefone, email, cargo, setor });
    });
});

// ==========================================
// ROTA: PRODUTOS
// ==========================================

// GET Produtos
app.get("/produtos", (req, res) => {
    const sql = "SELECT * FROM produtos";
    db.query(sql, (err, resultados) => {
        if (err) return res.status(500).json({ erro: err.message });
        res.json(resultados);
    });
});

// POST Produtos
app.post("/produtos", (req, res) => {
    const { nome, lote, quantidade, preco } = req.body;
    const sql = "INSERT INTO produtos (nome, lote, quantidade, preco) VALUES (?, ?, ?, ?)";
   
    db.query(sql, [nome, lote, quantidade, preco], (err, resultado) => {
        if (err) return res.status(500).json({ erro: err.message });
       
        res.status(201).json({ id: resultado.insertId, nome, lote, quantidade, preco });
    });
});

// === INICIAR SERVIDOR ===
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000 e integrado ao MySQL");
});