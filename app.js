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

app.get("/saudacao/:nome", (req, res) => {
  const { nome } = req.params;
  const { hora } = req.query;
  let saudacao;
  // hora = Number(hora);
  if (isNaN(hora)) {
    return res.status(400).json({ message: "Hora inválida" });
  } else {
    // if (hora < 0 || hora > 23) {};

    // if (nome == '') {
    // digite um nome valido
    // };
    if (hora >= 0 && hora < 12) {
      saudacao = "Bom dia";
    } else if (hora >= 12 && hora < 18) {
      saudacao = "Boa tarde";
    } else if (hora >= 18 && hora <= 23) {
      saudacao = "Boa noite";
    } else {
      return res.status(400).json({ message: "Hora inválida" });
    }
    res.status(200).json({ message: `${saudacao}, ${nome}!` });
  }
});

app.use((req, res) => {
  res.status(404).json({ message: "Pagina não encontrada" });
});

// Config para o sistema responder na porta configurada
app.listen(PORT, () => {
  console.log(`Servidor executando localhost na porta ${PORT}`);
});
