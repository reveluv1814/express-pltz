const productRouter = require('./products.routes');
const userRouter = require('./users.routes');

let routerApi = (app) => {
  app.use('/products', productRouter);
  app.use('/users', userRouter);
};

module.exports = { routerApi };
