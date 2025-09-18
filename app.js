const express = require("express");
const fs = require("fs/promises");
const app = express();
const PORT = 2800;

/**
 * Crie uma rota /calculadora que receba os parâmetros via query:
  operacao (valores possíveis: soma, subtracao, multiplicacao, divisao);
  numUm e numDois (números para operação);
  A rota deve processar os parâmetros e retornar o resultado da operação solicitada.

  GET /calculadora?operacao=soma&numUm=4&numDois=6 → Retorna Resultado: 10
 */

app.get("/calculadora", async (req, res) => {
  try {
    const {operacao, n1, n2} = req.query;
      if (!operacao || !n1 || !n2) {
          return res.status(400).json({ error: "Parâmetros insuficientes" });
      } else if (isNaN(n1) || isNaN(n2)) {
          return res.status(400).json({ error: "n1 e n2 devem ser números" });
// fim dos tratamentos de erro

      } if (operacao === "soma") {
          const resultado = Number(n1) + Number(n2);
          return res.json({ resultado });
      } else if (operacao === "subtracao") {
        const resultado = Number(n1) - Number(n2);
        return res.json({resultado});
      } else if (operacao === "multiplicacao") {
        const resultado = Number(n1) * Number(n2);
        return res.json({resultado});
      } else if (operacao === "divisao") {
        const resultado = Number(n1) / Number(n2);
        return res.json({resultado})
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});





app.use((req, res) => {
  res.status(404).json({ message: "Pagina não encontrada" });
});

// Config para o sistema responder na porta configurada
app.listen(PORT, () => {
  console.log(`Servidor executando localhost na porta ${PORT}`);
});