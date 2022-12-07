const express = require('express');
const { routerApi } = require('./routes/index');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Holis express');
});

app.get('/new', (req, res) => {
  res.send('Hola nueva ruta');
});

routerApi(app);

app.listen(port, () => {
  console.log('Mi port' + port);
});
