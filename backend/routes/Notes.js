const express = require('express')
router = express.Router()
const Note = require('../models/Notes.js')
const fetchuser = require('../middleware/fetchuser.js')
const { body, validationResult } = require('express-validator');
//Route:1  Fetch all user notes  using GET "/api/notes/fetchallnotes"( login required)
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({user:req.user.id})
        res.json(notes)
    } catch (error) {
        console.log(error.message)
        res.status(400).send('Some error occured')
    }

})
//Route:2 Creating or Adding notes using POST "/api/notes/creatingnotes"(login required)
router.post('/creatingnotes', fetchuser, [
    body('title', 'Write a valid title name').isLength({ min: 3 }),             //adding express-validator
    body('description', "Write a description of minimum length having 8 characters").isLength({ min: 8 }),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });     //expres-validator error syntax
        }
        const { title, tag, description } = req.body                   //destructuring
        const notes = new Note({ user: req.user.id, title, description, tag })
        const savednotes = await notes.save()
        res.json(savednotes)
    } catch (error) {
        console.log(error.message)
        res.status(400).send('Some error occured')
    }
})
module.exports = router