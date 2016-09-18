
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('comments')
        .insert({author: 'Maia Samuel', content: 'First Comment', post_id: 9})
      ]);
    });
};
