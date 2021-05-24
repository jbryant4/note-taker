const fs = require('fs');

const { createNewNote } = require('../lib/notes');
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