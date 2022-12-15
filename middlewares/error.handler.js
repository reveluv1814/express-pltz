//error middleware

let logErrors = (e, req, res, next) => {
  console.error(e);
  next(e);
};

let errorHandler = (e, req, res) => {
  res.status(500).json({ message: e.message, stack: e.stack });
};

let boomErrorHandler = (e, req, res, next) => {
  if (e.isBoom) {
    const { output } = e;
    res.status(output.statusCode).json(output.payload);
  }
  next(e);
};

module.exports = { logErrors, errorHandler, boomErrorHandler };
