import { response } from 'express';
import PaletasServices from '../services/paletas.service';

const paletasServices = new PaletasServices();

class PaletasControllers {
  async listarTodas(req, res) {
    try {
      const paletas = await paletasServices.listarTodas();

      res.send(paletas);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  async listarUmaPaletaPorId(req, res) {
    const id = req.params.id;

    const paleta = await paletasServices.listarUmaPaletaPorId({ id });

    res.send(paleta);
  }

  async criarNovaPaleta(req, res) {
    const { sabor, descricao, foto, preco } = req.body;

    try {
      const novaPaleta = await paletasServices.criarNovaPaleta({
        sabor,
        descricao,
        preco,
        foto,
      });

      res.status(201).send(novaPaleta);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send('Sabor já cadastrado');
      }
    }
  }

  async atualizarPaleta(req, res) {
    const { sabor, descricao, foto, preco } = req.body;
    const id = req.params.id;

    try {
      const paletaAtualizada = await paletasServices.atualizarPaleta({
        sabor,
        descricao,
        foto,
        preco,
        id,
      });

      res.send(paletaAtualizada);
    } catch (error) {
      res.status(400).send('Sabor já encontrado! ');
    }
  }

  async excluirPaleta(req, res) {
    const id = req.params.id;

    const paleta = await paletasServices.excluirPaleta({ id });

    res.status(200).send(paleta);
  }
}

export default PaletasControllers;
