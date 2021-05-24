//express and app setup
const express = require('express');
const path = require('path');
const { notes } = require('./db/db.json');
const { createNewNote, validateNote } = require('./lib/notes')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.post('/api/notes', (req, res) => {
    if (!validateNote(req.body)) {
        res.status(400).send('The animal is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

//app listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});


