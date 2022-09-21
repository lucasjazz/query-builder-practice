const knex = require('../../conexao');

async function listar(req, res) {
    try {
        const usuarios = await knex('usuarios2').select('*');
        return res.status(200).json(usuarios)
    } catch (error) {
        return res.status(400).json('Erro interno')
    }
};

async function detalhar(req, res) {
    const { id } = req.params
    try {
        const usuarios = await knex('usuarios2').where({ id }).first();
        if (!usuarios) {
            return res.status(404).json('Usuário não encontrado')
        }
        return res.status(200).json(usuarios)
    } catch (error) {
        return res.status(400).json('Erro interno')
    }
};

async function cadastrar(req, res) {
    const { nome, email, senha } = req.body;
    try {
        const addUser = await knex('usuarios2').insert({ nome, email, senha }).returning('*');
        return res.status(200).json(addUser);
    } catch (error) {
        return res.status(400).json('Erro interno');
    }
};

async function atualizar(req, res) {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    try {
        const verifyId = await knex('usuarios2').where({ id }).first();
        if (!verifyId) {
            return res.status(404).json('Usuario não encontrado')
        }
        const uptadeUser = await knex('usuarios2').update({ nome, email, senha }).where({ id }).returning('*');
        return res.status(200).json(uptadeUser);
    } catch (error) {
        return res.status(400).json('Erro interno');
    }
};

async function deletar(req, res) {
    const { id } = req.params;
    try {
        const verifyId = await knex('usuarios2').where({ id }).first();
        if (!verifyId) {
            return res.status(404).json('Usuario não encontrado')
        }
        const deleteUser = await knex('usuarios2').del().where({ id });
        return res.status(200).json('Excluido com sucesso');

    } catch (error) {
        return res.status(400).json('Erro interno');
    }
}

module.exports = {
    listar,
    detalhar,
    cadastrar,
    atualizar,
    deletar
}