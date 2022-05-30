import express, { json } from 'express';
import cors from 'cors';
import { conectarAoDataBase } from './database';
import paletasRouter from './routers/paleta.routes';
import usuariosRouter from './routers/usuarios.routes';

const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.send('Hello World');
});

app.use('/paletas', paletasRouter);
app.use('/usuarios', usuariosRouter);

app.listen(port, () => {
  conectarAoDataBase();
  console.log(`A aplicação está rodando na porta http://localhost:${port}`);
});
