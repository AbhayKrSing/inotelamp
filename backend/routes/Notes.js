const express = require('express')
router = express.Router()
const Note = require('../models/Notes.js')
const fetchuser = require('../middleware/fetchuser.js')
const { body, validationResult } = require('express-validator');
//Route:1  Fetch all user notes  using GET "/api/notes/fetchallnotes"( login required)
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
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
//Route:3 Updating Notes using PUT "/api/notes/updatingnotes/:id"(login required)
router.put('/updatingnotes/:id', fetchuser, async (req, res) => {  //   /:id dynamic endpoint(not fixed)
    try {
        const note = await Note.findById(req.params.id)
        if (!note) res.status(401).send('Notes not found')
        const { title, description, tag } = req.body
        const newnote = {}
        if (title) newnote.title = title
        if (description) newnote.description = description
        if (tag) newnote.tag = tag
        //checking wheather notes user trying to update is his notes or not.
        if (!(req.user.id == note.user.toString())) return res.status(401).send('Not allowed to update this notes')
        const updatednote = await Note.findByIdAndUpdate(req.params.id, {$set: newnote }, { new: true })
        res.json(updatednote)

    } catch (error) {
        console.log(error.message)
        res.status(400).send('Some error occured')
    }
})
module.exports = router