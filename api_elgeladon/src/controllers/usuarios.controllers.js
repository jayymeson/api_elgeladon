import UsuarioService from '../services/usuarios.service';

const usuarioService = new UsuarioService();

class UsuariosControllers {
  async listarTodos(req, res) {
    const usuarios = await usuarioService.listarTodos();

    res.send(usuarios);
  }

  async listarPorId(req, res) {
    const id = req.params.id;

    const usuario = await usuarioService.listarPorId({ id });

    res.send(usuario);
  }

  async criarNovoUsuario(req, res) {
    const { email, nome, senha, adm } = req.body;

    try {
      const usuario = await usuarioService.criarNovoUsuario({
        email,
        nome,
        senha,
        adm,
      });

      res.status(201).send(usuario);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send('E-mail já cadastrado');
      }
    }
  }

  async atualizarUsuario(req, res) {
    const id = req.params.id;
    const { email, nome, senha, adm } = req.body;

    try {
      const usuarioAtualizado = await usuarioService.atualizarUsuario({
        id,
        email,
        nome,
        senha,
        adm,
      });
  
      res.send(usuarioAtualizado);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send('E-mail já cadastrado');
      }
    }
  }

  async excluirUsuario(req, res) {
    const id = req.params.id;

    await usuarioService.excluirUsuario({ id });

    res.sendStatus(204);
  }
}

export default UsuariosControllers;
