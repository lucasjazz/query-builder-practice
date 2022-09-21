const express = require('express');
const usuarios = require('../controladores/controladores');
const verificarDados = require('../intermediarios/intermediarios');

const rotas = express();

rotas.get('/usuarios', usuarios.listar);
rotas.get('/usuarios/:id', usuarios.detalhar);
rotas.post('/usuarios', verificarDados, usuarios.cadastrar);
rotas.put('/usuarios/:id', verificarDados, usuarios.atualizar);
rotas.delete('/usuarios/:id', usuarios.deletar);

module.exports = rotas;