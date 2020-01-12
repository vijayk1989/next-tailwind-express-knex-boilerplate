exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('blogposts')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('blogposts').insert([
        { title: 'Hello', content: 'Hello world!' },
        { title: 'Universe', content: 'Awesome world' },
        {
          title: 'Why JS is a robust language',
          content: 'Some blog content',
        },
      ]);
    });
};
