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

app.use(express.json());

app.get("/operacao/:tipo", (req, res) => {
  const { tipo } = req.params;
  const { numUm, numDois } = req.query;
  let resultado;

  const numero1 = parseFloat(numUm);
  const numero2 = parseFloat(numDois);
  if (isNaN(numero1) || isNaN(numero2)) {
    return res.status(500).json({ message: "Parâmetros inválidos" });
  }
  switch (tipo) {
    case "soma":
      resultado = numero1 + numero2;
      break;
    case "subtracao":
      resultado = numero1 - numero2;
      break;
    case "multiplicacao":
      resultado = numero1 * numero2;
      break;
    case "divisao":
      if (numero2 === 0) {
        return res.status(500).json({ message: "Divisão por zero não é permitida" });
      }
      resultado = numero1 / numero2;
      break;
    };
  res.json({ resultado });
});

app.use((req, res) => {
  res.status(404).json({ message: "Pagina não encontrada" });
});

// Config para o sistema responder na porta configurada
app.listen(PORT, () => {
  console.log(`Servidor executando localhost na porta ${PORT}`);
});