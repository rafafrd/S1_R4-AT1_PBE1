const express = require("express");
const fs = require("fs/promises");
const app = express();
const PORT = 2800;

/**
 * Crie uma rota /ano/:ano que receba o ano via path parameter.
 * A rota deve verificar se o ano é bissexto ou não e retornar uma mensagem adequada.
 * Exemplo:
 * GET /ano/2024 → O ano 2024 é bissexto.
 */

app.use(express.json());

app.get("/ano/:year", (req, res) => {
  const { year } = req.params;
  const anoNum = parseInt(year, 10);
  if (isNaN(anoNum)) {
    return res.status(400).json({ message: "Pararmetro inválido" });
  } // Um ano é bissexto se for divisível por 400 OU
    // se for divisível por 4 E NÃO for divisível por 100
  const isBissexto = (anoNum % 4 === 0 && anoNum % 100 !== 0) || (anoNum % 400 === 0);
  if (isBissexto) {
    return res.status(200).json({ message: `O ano ${anoNum} é bissexto.` });
  } else {
    return res.status(200).json({ message: `O ano ${anoNum} não é bissexto.` });
  }
});

app.use((req, res) => {
  res.status(404).json({ message: "Pagina não encontrada" });
});

// Config para o sistema responder na porta configurada
app.listen(PORT, () => {
  console.log(`Servidor executando localhost na porta ${PORT}`);
});