//express and app setup
const express = require('express');
const fs = require('fs');
const path = require('path')

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

function activeNoteFile() {
    const notes = fs.readFile('./db/db.json', (err,data) => {
        if (err) throw err
        console.log(data);
        return data;

    });

    console.log(notes)
};

activeNoteFile();
//app listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});












