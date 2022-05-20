import paletas from '../database';

class PaletasServices {
  listarTodas() {
    return paletas;
  }

  listarUmaPaletaPorId({ id }) {
    const paletaSelecionada = paletas.find((paleta) => paleta.id === id);

    return paletaSelecionada;
  }

  criarNovaPaleta({ sabor, descricao, foto, preco }) {
    const novaPaleta = {
      id: paletas[paletas.length - 1].id + 1,
      sabor,
      descricao,
      foto,
      preco,
    };

    paletas.push(novaPaleta);

    return novaPaleta;
  }

  atualizarPaleta({ sabor, descricao, foto, preco, id }) {
    const editarPaleta = {
      id,
      sabor,
      descricao,
      foto,
      preco,
    };

    const paletaIndex = paletas.findIndex((elem) => elem.id === id);

    paletas[paletaIndex] = editarPaleta;

    return editarPaleta;
  }

  excluirPaleta({ id }) {
    const paletaIndex = paletas.findIndex((elem) => elem.id === id);

    paletas.splice(paletaIndex, 1);
  }
}

export default PaletasServices;
