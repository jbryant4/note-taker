const router = require('express').Router();
const {createNewNote, filterOutById, activeNoteFile } = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const { nanoid } = require('nanoid');
const fs = require('fs');


router.get('/notes', (req, res) => {
    const activeNotes = activeNoteFile();
    console.log(activeNotes);
    res.json(activeNotes);
});


router.post('/notes', (req, res) => {

    req.body.id = nanoid(10);

    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {

    const activeNotes = activeNoteFile(); 

    // const result = filterOutById(req.params.id, activeNotes);
    
    // console.log(result)
    res.send(activeNotes)
});

module.exports = router;