exports.up = knex => {
  return knex.schema.createTable('blogposts', t => {
    t.increments('blog_id');
    t.string('title');
    t.text('content');
  });
};

exports.down = knex => {
  return knex.schema.dropTable('blogposts');
};
