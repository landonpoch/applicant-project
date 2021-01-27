import express = require('express');
import cors = require('cors');
import multer = require('multer');
import fs = require('fs');
import { deleteAll, readDirectory, readFile } from './controller';

// Contains framework code that is boilerplate.
// Business logic has been abstracted to a separate controller layer for testing

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

const app = express();
app.get('/', cors(), (req, res) => {
    let files = readDirectory(fs);
    res.send(JSON.stringify(files));
});

app.get('/file/:filename', cors(), (req, res) => {
    const { type, buffer } = readFile(fs, req.params.filename);
    res.header('Content-Type', type);
    res.send(buffer);
});

app.post('/file', cors(), upload.single('uploaded_file'), (req, res, next) => {
    res.redirect('http://localhost:4200/');
});

// Used for testing, would obviously need to be secure for a real app
app.delete('/', cors(), (req, res) => {
    deleteAll(fs);
    res.sendStatus(200);
})

app.listen(3000, () => {
    console.log('App is listening on port 3000!');
});
