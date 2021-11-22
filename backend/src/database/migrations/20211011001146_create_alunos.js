exports.up = function(knex) {
    return knex.schema.createTable('alunos', function(table){
        table.increments()
        table.string('nome').notNullable()
        table.string('prontuario', 7).notNullable()
        table.string('email').notNullable()
        table.string('senha').notNullable()
        table.string('permissao').notNullable()
        table.string('currentKit')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('alunos')
};
