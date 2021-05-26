const fs = require('fs');
const path = require('path')

function createNewNote(noteData, noteArray) {

    const note = noteData;
    const newNotes = JSON.parse(noteArray)
    newNotes.push(noteData)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(newNotes, null, 2));

    return note;
};



function filterOutById(id, noteArray) {
    const newNotes = JSON.parse(noteArray)
    const result = newNotes.filter(note => note.id !== id);
    ;
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(result, null, 2)
    );

    return result; //i think this is my problem 
};

function activeNoteFile() {
    var notes = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');

    return notes
};

module.exports = {
    createNewNote,
    filterOutById,
    activeNoteFile
};