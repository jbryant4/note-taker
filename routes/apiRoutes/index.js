const router = require('express').Router();
const {validateNote , createNewNote} = require('../../lib/notes')
const {notes} = require('../../db/db.json')

router.get('/api/notes', (req, res) => {
    res.json(notes);
});


router.post('/api/notes', (req, res) => {
    if (!validateNote(req.body)) {
        res.status(400).send('The animal is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});


module.exports = router;