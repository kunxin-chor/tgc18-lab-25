const bookshelf = require('../bookshelf'); // 
// by default if we require a folder,
// nodejs will look for index.js

// a Bookshelf Model represents one table
// the name of the model (the first arg)
// must be the SINGULAR form of the table name
// and the first letter MUST be uppercase
const Product = bookshelf.model('Product', {
    tableName: 'products'
})

module.exports = { Product };