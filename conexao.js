const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'lnc020999',
        database: 'aula_knex'
    }
});

module.exports = knex;