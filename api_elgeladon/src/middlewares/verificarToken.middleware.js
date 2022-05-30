import jwt from 'jsonwebtoken';

const verificarTokenMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (token === undefined) {
    return res.status(401).send('Token não enviado');
  }

  jwt.verify(token, 'secret', (error, decode) => {
    if (error) {
      return res.status(401).send('Token inválido');
    }

    next();
  });
};

export default verificarTokenMiddleware;
