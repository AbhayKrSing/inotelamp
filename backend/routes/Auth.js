const mongoose = require('mongoose')
const { body, validationResult } = require('express-validator');
mongoose.set('strictQuery', true)
const User = require('../models/User.js')
const express = require('express')
router = express.Router()

//Create a User using:POST "/api/auth".Doesn't require Auth
router.post('/', [
    body('name','Write a valid name').isAlpha(),
    body('email',"Write a valid email address").isEmail(),
    body('password','Write a password whose length must be till 8 letters').isLength({ min: 8 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()});
    }
    user = new User(req.body)
    user.save().then((value) => {
        res.json(value)
        console.log('data saved')
    }).catch((err) => {
        console.log(err.message)
        res.status(400).send('Write unique email address')
    })
})
module.exports = router

//Note: if you write duplicate email is get passed from middleware(express-validator) but later on the promise use.save() will get rejected because schema(or model) will not followed due to this duplicate error is shown in console.