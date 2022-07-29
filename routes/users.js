const express = require('express');
const { createUserForm, bootstrapField, createLoginForm } = require('../forms');
const { User } = require('../models');
const router = express.Router();

router.get('/signup', async function(req,res){
    const userForm = createUserForm();
    res.render('users/signup',{
        'form': userForm.toHTML(bootstrapField)
    })
})

router.post('/signup', async function(req,res){
    const userForm = createUserForm();
    userForm.handle(req,{
        'success': async function(form) {
            // create an instance of the user model
            // Model -> the table
            // An instance of the model -- one row
            const user = new User();
            // user.set('username', form.data.username);
            // user.set('password', form.data.password);
            // user.set('email', form.data.email);
            const {confirm_password, ...userData} =  form.data;
            user.set(userData);

            await user.save();
            req.flash('success_messages', "You have signed up successfully");
            res.redirect('/users/login')
        },
        'error': function(form) {
            res.render('users/signup',{
                'form': userForm.toHTML(bootstrapField)
            })
        },
        'empty': function(form) {
            res.render('users/signup',{
                'form': userForm.toHTML(bootstrapField)
            })
        }
    })
})

router.get('/login', async function(req,res){
    const loginForm = createLoginForm();
    res.render('users/login',{
        'form': loginForm.toHTML(bootstrapField)
    })
})

module.exports = router;