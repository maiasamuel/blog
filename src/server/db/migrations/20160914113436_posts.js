
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function (table) {
    table.increments();
    table.text('title');
    table.text('content');
    table.text('photo_cover_url');
    table.text('author');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
