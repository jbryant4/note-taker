const fs = require('fs');

const { createNewNote, validateNote } = require('../lib/notes');
const { notes } = require('../db/db.json');

jest.mock('fs');

test("creates a note objest", () => {
    const note = createNewNote(
        { title: "Submit HW", text: "HW is due on sunday night" },
        notes
    );

    expect(note.title).toBe("Submit HW");
    expect(note.text).toBe("HW is due on sunday night");
});


test('validates the note object has data', () => {
    const note = {
        title:'hi',
        text: 'i am here'
    };

    const note1 = {
        title:'',
        text: 'i am here'
    };

    const note2 = {
        title:'hi',
        text: ''
    };

    const result = validateNote(note);
    const result1 = validateNote(note1);
    const result2 = validateNote(note2);

    expect(result).toBe(true)
    expect(result1).toBe(false)
    expect(result2).toBe(false)
})