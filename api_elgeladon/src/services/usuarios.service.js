import Usuario from '../models/usuarios.model';
import usuariosRouter from '../routers/usuarios.routes';

class UsuarioService {
  async listarTodos() {
    const usuarios = await Usuario.find();

    return usuarios;
  }

  async listarPorId({ id }) {
    const usuarios = await Usuario.findByID(id);

    return usuarios;
  }

  async criarNovoUsuario({email, nome, senha, adm}) {
    const novoUsuario = {
      email,
      nome,
      senha,
      adm,
    }

    const usuario = await Usuario.creat(novoUsuario);

    return usuario;
  }
}

export default UsuarioService;
