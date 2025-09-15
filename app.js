const express = require("express");
const fs = require("fs/promises");
const { json } = require("stream/consumers");
const app = express();
const PORT = 2800;

/*  Crie uma rota /imc que receba peso e altura via query parameters.
Calcule o Índice de Massa Corporal (IMC) e retorne o resultado com a classificação (baixo peso, normal, sobrepeso, obesidade).

Exemplo:
GET /imc?peso=70&altura=1.75 → IMC: 22.86 - Peso normal
 */

app.use(express.json());

app.get("/imc", (req, res) => {
  const peso = parseFloat(req.query.peso);
  const altura = parseFloat(req.query.altura);
  if (!peso || !altura) {
    return res
      .status(400)
      .json({ error: "Por favor, forneça peso e altura válidos." });
  }
  const imc = peso / (altura * altura);
  let classificacao = "";
  if (imc < 18.5) {
    classificacao = "Baixo peso";
  } else if (imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }
  res.json({ imc: imc.toFixed(2), classificacao }); // pra não ficar retornando muitos numeros quebrados
});


app.use((req, res) => {
  res.status(404).json({ message: "Pagina não encontrada" });
});

// Config para o sistema responder na porta configurada
app.listen(PORT, () => {
  console.log(`Servidor executando localhost na porta ${PORT}`);
});