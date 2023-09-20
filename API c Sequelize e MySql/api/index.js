const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

const port = 3000

app.get('/', (req, res) => {
  res.status(200)
  .send({mensagens: 'boas vidas a API!'})
})

app.listen(port, () => console.log(`servidor está na rodando na portda ${port}`))