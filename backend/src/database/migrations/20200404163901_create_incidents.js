exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('time').notNullable();
        table.string('type').notNullable();

        table.string('user_id').notNullable();
        table.foreign('user_id').references('username').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents')
};
