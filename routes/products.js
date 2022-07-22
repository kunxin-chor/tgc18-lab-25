const express = require('express')
const router = express.Router();

// import in the Product model
const {Product} = require('../models')

router.get('/', async function(req,res){
    // fetch all the products
    // use the bookshelf syntax 
    // => select * from products
    let products = await Product.collection().fetch();
    res.render('products/index',{
        products: products.toJSON()
    })
})

router.get('/create', function(req,res){
    res.send("create product")
})

module.exports = router;