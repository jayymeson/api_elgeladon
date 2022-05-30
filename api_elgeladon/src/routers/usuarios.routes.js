import { Router } from 'express';
import UsuariosControllers from '../controllers/usuarios.controllers';
import verificarDadosDeUsuarioMiddleware from '../middlewares/verificarDadosDeUsuario.middleware';
import verificarIdDeUsuarioMiddleware from '../middlewares/verificarIdDeUsuario.middleware';
import verificarToken from '../middlewares/verificarToken.middleware';

const usuariosRouter = Router();
const usuariosControllers = new UsuariosControllers();

usuariosRouter.get('', usuariosControllers.listarTodos);
usuariosRouter.get(
  '/:id',
  verificarIdDeUsuarioMiddleware,
  usuariosControllers.listarPorId,
);
usuariosRouter.post(
  '/criar-usuario',
  verificarDadosDeUsuarioMiddleware,
  usuariosControllers.criarNovoUsuario,
);
usuariosRouter.put(
  '/atualizar-usuario/:id',
  verificarToken,
  verificarIdDeUsuarioMiddleware,
  verificarDadosDeUsuarioMiddleware,
  usuariosControllers.atualizarUsuario,
);
usuariosRouter.delete(
  '/excluir-usuario/:id',
  verificarToken,
  verificarIdDeUsuarioMiddleware,
  usuariosControllers.excluirUsuario,
);

export default usuariosRouter;
