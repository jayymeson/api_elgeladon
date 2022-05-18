import express, { json } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { env } from 'process';

const port = env.PORT || 3000;
const app = express();
config();

app.use(express.json());
app.use(cors());

const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];

app.get('/paletas/todas-paletas', (req, res) => {
  res.send(paletas);
});

app.get('/paletas/paleta/:id', (req, res) => {
  const id = Number(req.params.id);

  const paletaSelecionada = paletas.find((paleta) => paleta.id === id);

  if (paletaSelecionada === undefined) {
    res.status(404).send('Paleta não encontrada');
  }

  res.send(paletaSelecionada);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
