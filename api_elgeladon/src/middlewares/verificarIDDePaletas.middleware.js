import paletas from '../database';

const verificarIdDePaletaMiddleware = (req, res, next) => {
  const id = Number(req.params.id);

  const paleta = paletas.find((elem) => elem.id === id);

  if (!paleta) {
    return res.status(404).send('Paleta não encontrada!');
  }

  next();
};

export default verificarIdDePaletaMiddleware;
