const knex = require('knex')({
    client: 'mysql',
    connection:{
        user:'foo',
        password:'bar',
        database:'tgc18_organic'
    }
})

const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;