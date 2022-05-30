import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UsuarioSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    nome: { type: String, required: true },
    senha: { type: String, required: true },
    adm: { type: Boolean, required: true },
  },
  { versionKey: false },
);

const Usuario = model('usuario', UsuarioSchema);

export default Usuario