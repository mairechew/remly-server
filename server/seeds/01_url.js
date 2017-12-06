
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('url').del()
    .then(function () {
      // Inserts seed entries
      return knex('url').insert([
        {id: 1, url: 'https://drive.google.com/file/d/1Qu6zEpOkzGLkj1NWyw-jgLDygygK3aly/view?usp=sharing', description: 'image-one'},
        {id: 2, url: 'https://drive.google.com/file/d/1J4md-yk5McevnrL8NZh-HBF6C8jnEVGD/view?usp=sharing', description: 'image-two'},
        {id: 3, url: 'https://drive.google.com/file/d/1HEWwljZ4aRdcf4yOBrFICOxEKAM0YVjg/view?usp=sharing', description: 'image-three'},
        {id: 4, url: 'https://drive.google.com/file/d/1Ajcu_OuBLeXCBw0ygqOZldTxorNUqxKH/view?usp=sharing', description: 'contact-card'}
      ]);
    });
};
