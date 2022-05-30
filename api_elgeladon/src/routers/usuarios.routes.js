import { Router } from 'express';
import UsuariosControllers from '../controllers/usuarios.controllers';

const usuariosRouter = Router();
const usuariosControllers = new UsuariosControllers();

usuariosRouter.get('', usuariosControllers.listarTodos);
usuariosRouter.get('/:id', usuariosControllers.listarPorId)
usuariosRouter.get('/criar-usuario', usuariosControllers.criarNovoUsuario)

export default usuariosRouter;
