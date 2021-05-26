const router = require('express').Router();
const {createNewNote, filterOutById, activeNoteFile } = require('../../lib/notes');
const { nanoid } = require('nanoid');


router.get('/notes', (req, res) => {
    const activeNotes = activeNoteFile();
    
    res.send(activeNotes);
});


router.post('/notes', (req, res) => {
    const activeNotes = activeNoteFile();
    req.body.id = nanoid(10);

    const note = createNewNote(req.body, activeNotes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {

    const activeNotes = activeNoteFile(); 

    const result = filterOutById(req.params.id, activeNotes);
    
    res.send(result)
});

module.exports = router;