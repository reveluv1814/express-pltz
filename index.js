const express = require('express');
//cors
const cors = require('cors');
const { routerApi } = require('./routes/index');
const { PORT } = require('./config');

//importamos el arachivo de middlewares
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();

app.use(express.json());

//cors lista de lugares donde si quiero que hagan peticiones
const whitelist = ['http//localhost:8080', 'https://myappp.bo'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};

app.use(cors(options));
//fin middlewares

app.get('/', (req, res) => {
  res.send('Holis express');
});

app.get('/new', (req, res) => {
  res.send('Hola nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Mi port' + PORT);
});
