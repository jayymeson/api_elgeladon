import UsuarioService from '../services/usuarios.service';

const usuarioService = new UsuarioService();

class UsuariosControllers {
  async listarTodos(req, res) {
    const usuarios = await usuarioService.listarTodos();

    res.send(usuarios);
  }

  async listarPorId(req, res) {
    const id = req.params.id;

    const usuario = await usuarioService.listarUmaPaletaPorId({ id });

    res.send(usuario);
  }

  async criarNovoUsuario(req, res) {
    const { email, nome, senha, adm } = req.body;

    const usuario = await usuarioService.criarNovoUsuario({
      email,
      nome,
      senha,
      adm,
    });

    res.status(201).send(usuario);
  }
}

export default UsuariosControllers;
