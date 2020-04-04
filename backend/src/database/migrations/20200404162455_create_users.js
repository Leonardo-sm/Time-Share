exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.string('username').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('gender').notNullable();
        table.float('balance').notNullable();
        table.string('description').notNullable();
        table.float('evaluation').notNullable();

        table.string('password').notNullable();
        table.foreign('password').references('username').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
