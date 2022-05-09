import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express()
app.use(bodyParser.json());
app.use(cors());

// sería como la base de datos
const lista = [{ codigo: 100, desc: "Tele" }, { codigo: 101, desc: "Silla" }];

app.get('/api/test', (req, res) => {
  res.send('ok')
})

app.get('/api/lista', (req, res) => {
  res.json(lista);
})

app.post('/api/producto', (req, res) => {
  req.body.codigo = Number(req.body.codigo);
  lista.push(req.body);
  res.json(req.body);
})

app.delete('/api/producto', (req, res) => {
  console.log(req);
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);
  res.json({ope:"ok"});
})

const port = 3001
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
