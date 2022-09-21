function verificarDados(req, res, next) {
    const { nome, email, senha } = req.body;

    if (!nome, !email, !senha) {
        return res.status(404).json('Todos os campos são obrigatórios')
    }
    if (!email.includes('@')) {
        return res.status(404).json('Email inválido')
    }
    next();
}

module.exports = verificarDados;