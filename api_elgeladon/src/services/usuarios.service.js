import Usuario from '../models/usuarios.model';
import usuariosRouter from '../routers/usuarios.routes';
import bcryptjs from 'bcryptjs'

class UsuarioService {
  async listarTodos() {
    const usuarios = await Usuario.find();

    return usuarios;
  }

  async listarPorId({ id }) {
    const usuarios = await Usuario.findById(id);

    return usuarios;
  }

  async criarNovoUsuario({ email, nome, senha, adm = false}) {

    const senhaCript = await bcryptjs.hash(senha, 8)

    const novoUsuario = {
      email,
      nome,
      senha: senhaCript,
      adm,
    };

    try {
      const usuario = await Usuario.create(novoUsuario);

    return usuario;
    } catch (error) {
      throw error;
    }

    
  }

  async atualizarUsuario({ id, email, nome, senha, adm }) {
    const usuarioAtualizado = {
      email,
      nome,
      senha,
      adm,
    };

    try {
      await Usuario.updateOne({ _id: id }, usuarioAtualizado);

    const usuario = await Usuario.findById(id);

    return usuario;
    } catch (error) {
      throw error;
    }
  }

  async excluirUsuario({ id }) {
    await Usuario.findByIdAndDelete(id);
  }
}

export default UsuarioService;
