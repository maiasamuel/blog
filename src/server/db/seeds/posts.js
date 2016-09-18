
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({title: 'First Post', content: 'First Post', photo_cover_url: 'https://hd.unsplash.com/photo-1441765425173-8fd330fb4a02', author: 'Maia Samuel'})
      ]);
    });
};
