/* 
npx knex migrate:make nomedamigration
npx knex migrate:latest //confirmar criação
npx knex migrate:rollback //desfazer latest
*/

exports.up = function(knex) { //criação da tabela
    return knex.schema.createTable('users', function (table) {
        table.decimal('cpf').primary();
            table.string('nome').notNullable();
            table.decimal('idade').notNullable();
            table.string('whatsapp').notNullable();
            table.string('endereco').notNullable();
            table.string('sexo').notNullable();
            table.string('batalhaoatual').notNullable();
            table.string('batalhaointeresse').notNullable();   
            table.string('orgao').notNullable();
            table.decimal('comportamento').notNullable();
            table.decimal('matriculaestadual').notNullable();
    })
};

exports.down = function(knex) { //delete a tabela
    return knex.schema.dropTable('users');
};
