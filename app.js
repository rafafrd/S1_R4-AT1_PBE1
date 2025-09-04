const express = require("express");
const fs = require("fs/promises");
const app = express();
const PORT = 2800;

/**
 * Crie uma rota /operacao/:tipo onde tipo é a operação matemática (soma, subtracao, multiplicacao, divisao).
  Os números numUm e numDois serão passados via query parameters.

  Dica: utilize switch case.

  A rota deve executar a operação e retornar o resultado.  
 */

app.use((req, res) => {
  res.status(404).json({ message: "Pagina não encontrada" });
});

// Config para o sistema responder na porta configurada
app.listen(PORT, () => {
  console.log(`Servidor executando localhost na porta ${PORT}`);
});