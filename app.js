const express = require("express");
const fs = require("fs/promises");
const { json } = require("stream/consumers");
const app = express();
const PORT = 2800;

/**
 * Crie uma rota /saudacao/:nome que receba o nome via path parameter.
 * Receba via query parameter a hora do dia (hora) como número (0-23).
 * A rota deve retornar uma saudação personalizada baseada na hora (ex: “Bom dia, João!”).
 * Exemplo:
 * GET /saudacao/Joao?hora=14 → Boa tarde, João!
 */

app.use(express.json());


app.use((req, res) => {
  res.status(404).json({ message: "Pagina não encontrada" });
});

// Config para o sistema responder na porta configurada
app.listen(PORT, () => {
  console.log(`Servidor executando localhost na porta ${PORT}`);
});