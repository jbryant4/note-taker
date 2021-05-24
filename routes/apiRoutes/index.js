const router = require('express').Router();
const {createNewNote, filterOutById } = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const { nanoid } = require('nanoid');
const fs = require('fs');


router.get('/notes', (req, res) => {
    res.json(notes);
});


router.post('/notes', (req, res) => {

    req.body.id = nanoid(10);

    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {

    const result = filterOutById(req.params.id, notes);
    res.json(result)
});

module.exports = router;