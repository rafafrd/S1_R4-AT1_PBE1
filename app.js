const express = require("express");
const fs = require("fs/promises");
const app = express();
const PORT = 2800;

/**
 * Crie um projeto Express com quatro rotas GET, cada uma representando uma operação matemática: adição, subtração, multiplicação e divisão. 

Cada rota deve capturar os parâmetros numUm e numDois da URL, realizar a operação correspondente e retornar o resultado no formato de texto simples.
Trate possíveis erros, como divisão por zero, e retorne mensagens adequadas.

Exemplo de chamada:
GET /soma/5/10 deve retornar:
Resultado da soma: 15
 */

app.get("/soma/:numUm/:numDois", (req, res) => {
  const numUm = Number(req.params.numUm);
  const numDois = Number(req.params.numDois);
  const resultado = numUm + numDois;
  res.send(`Resultado da soma: ${resultado}`);
});

app.get("/subtracao/:numUm/:numDois", (req, res) => {
  const numUm = Number(req.params.numUm);
  const numDois = Number(req.params.numDois);
  const resultado = numUm - numDois;
  res.send(`Resultado da subtração: ${resultado}`);
});

app.get("/multiplicacao/:numUm/:numDois", (req, res) => {
  const numUm = Number(req.params.numUm);
  const numDois = Number(req.params.numDois);
  const resultado = numUm * numDois;
  res.send(`Resultado da multiplicação: ${resultado}`);
});

app.get("/divisao/:numUm/:numDois", (req, res) => {
  const numUm = Number(req.params.numUm);
  const numDois = Number(req.params.numDois);
  const resultado = numUm / numDois;
  res.send(`Resultado da divisão: ${resultado}`);
});

app.use((req, res) => {
  res.status(404).json({ message: "Pagina não encontrada" });
});

// Config para o sistema responder na porta configurada
app.listen(PORT, () => {
  console.log(`Servidor executando localhost na porta ${PORT}`);
});