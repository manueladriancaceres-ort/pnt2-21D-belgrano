import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express()
app.use(bodyParser.json());
app.use(cors());

// sería como la base de datos
const lista = [{ codigo: 100, desc: "Tele" }, { codigo: 101, desc: "Silla" }];

// este sistema simula un solo usuario, como si fuera monousuario
// de la base de datos
const usuario = { email : 'usuario@test.com', password : '123456'  }  // agregar que rol es
// segunda etapa
// const roles = [{rol: 'admin', permisoso ['*']} , { rol : 'usuariofinal', permisos : ['sistema','otros'] }]


app.post('/api/login', (req, res) => {
  if( req.body && req.body.email === usuario.email && req.body.password == usuario.password) {
    res.json(req.body);
  } else {
    res.sendStatus(400);
  }
})



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

app.delete('/api/producto/:codigo', (req, res) => {
  const listaCodigos = lista.map(e => {return e.codigo});
  const indice = listaCodigos.indexOf(Number(req.params.codigo));
  if (indice >= 0) {
    lista.splice(indice,1);
    res.json({ope:"ok"});
  } else {
    res.json({ope:"error"});
  }
})

const port = 3001
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
