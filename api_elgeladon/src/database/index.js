import mongoose from 'mongoose';

const { connect } = mongoose;

export const conectarAoDataBase = () => {
  connect('mongodb://localhost:27017/elgeladon_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('MongoDB conectado');
    })
    .catch((err) => {
      console.log(`Erro na conexão com o MongoDB: ${err}`);
    });
};
