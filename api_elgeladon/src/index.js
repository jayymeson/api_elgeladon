import express, { json } from 'express';
import cors from 'cors';
import paletasRouter from './routers/paleta.routes';
import { conectarAoDataBase } from './database';

const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.send('Hello World');
});

app.use('/paletas', paletasRouter);

app.listen(port, () => {
  conectarAoDataBase();
  console.log(`A aplicação está rodando na porta http://localhost:${port}`);
});
