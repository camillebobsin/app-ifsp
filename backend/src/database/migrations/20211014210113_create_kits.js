exports.up = function(knex) {
    return knex.schema.createTable('kits', function(table){
        table.increments()
        table.string('nome').notNullable()
        table.specificType('componentes', 'integer ARRAY')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('kits')
};
