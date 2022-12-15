//validador de JOI

//error boom
const boom = require('@hapi/boom');

const validatorHandler = (schema, property) => {
  // Clousers = Clausuras = Creacion de un middleware de forma dinamica
  //creamos un middleware de forma dinamica
  return (req, res, next) => {
    //data es la informacion que se envia para validar y property es para una de sus propiedades

    //{abortEarly: false} envia todos los errores y no uno por uno
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) next(boom.badRequest(error));
    next();
  };
};

module.exports = validatorHandler;
