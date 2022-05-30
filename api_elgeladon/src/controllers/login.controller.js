import LoginServices from '../services/login.service';

const loginServices = new LoginServices();

class LoginControllers {
  async login(req, res) {
    const { email, senha } = req.body;

    const login = await loginServices.login({ email, senha });

    res.status(login.status).send({token: login.token});
  }
}

export default LoginControllers;
