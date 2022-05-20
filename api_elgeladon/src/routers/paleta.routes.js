import { Router } from 'express';
import PaletasControllers from '../controllers/paletas.controllers';
import verificarIdDePaletaMiddleware from '../middlewares/verificarIDDePaletas.middleware';
import verificarDadosDePaletasMiddleware from '../middlewares/verificarDadosDePaleta.middleware';

const paletasRouter = Router();
const paletasControllers = new PaletasControllers();

paletasRouter.get('/todas-paletas', paletasControllers.listarTodas);
paletasRouter.get(
  '/paleta/:id',
  verificarIdDePaletaMiddleware,
  paletasControllers.listarUmaPaletaPorId,
);
paletasRouter.post(
  '/criar-paleta',
  verificarDadosDePaletasMiddleware,
  paletasControllers.criarNovaPaleta,
);
paletasRouter.put(
  '/atualizar-paleta/:id',
  verificarIdDePaletaMiddleware,
  verificarDadosDePaletasMiddleware,
  paletasControllers.atualizarPaleta,
);
paletasRouter.delete(
  '/excluir-paleta/:id',
  verificarIdDePaletaMiddleware,
  paletasControllers.excluirPaleta,
);

export default paletasRouter;
