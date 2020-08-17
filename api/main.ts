import express = require('express');
import cors = require('cors');
import multer = require('multer');
import _ = require('lodash');
import fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

const app = express();
app.get('/', cors(), (req, res) => {
    const filenames = fs.readdirSync('uploads/');
    const uploadedFiles = _.filter(filenames, fn => !fn.startsWith('.'));
    res.send(JSON.stringify(uploadedFiles));
});

app.get('/file/:filename', cors(), (req, res) => {
    const filename = req.params.filename;
    const extension = _.last(filename.split('.'));
    const buffer = fs.readFileSync('uploads/' + filename);
    if (extension.toUpperCase() === 'jpg'.toUpperCase()) {
        res.header('Content-Type', 'image/jpg');
    }
    if (extension.toUpperCase() === 'mp4'.toUpperCase()) {
        res.header('Content-Type', 'video/mp4');
    }
    res.send(buffer);
});

app.post('/file', cors(), upload.single('uploaded_file'), (req, res, next) => {
    res.redirect('http://localhost:4200/');
});

app.listen(3000, () => {
    console.log('App is listening on port 3000!');
});
