import express, { json } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { env } from 'process';
import paletasRouter from './routers/paleta.routes';

const port = env.PORT || 3000;
const app = express();
config();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.send('Hello World');
});

app.use('/paletas', paletasRouter);

app.listen(port, () => {
  console.log(`A aplicação está rodando na porta http://localhost:${port}`);
});
