const fs = require('fs');
const path = require('path')

function createNewNote(noteData, noteArray) {

    const note = noteData;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
    );

    return note;
};



function filterOutById(id, noteArray) {
    const result = noteArray.filter(note => note.id !== id);
    
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: result }, null, 2)
    );
    
    return result
};

module.exports = {
    createNewNote,
    filterOutById
};