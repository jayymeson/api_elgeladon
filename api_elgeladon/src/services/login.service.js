import Usuario from '../models/usuarios.model';
import bcryptjs from 'bcryptjs/dist/bcrypt';
import jwt from 'jsonwebtoken';

class LoginServices {
  async login({ email, senha }) {
    const usuario = await Usuario.findOne({ email: email });

    if (!usuario) {
      return { status: 400, message: 'E-mail inválido' };
    }

    const senhaValida = await bcryptjs.compare(senha, usuario.senha);

    if (senhaValida === false) {
      return { status: 400, message: 'Senha inválida' };
    }

    const token = jwt.sign({email: email}, 'secret', {expiresIn: '24h'})

    return { status: 200, token: token };
  }
}

export default LoginServices;
