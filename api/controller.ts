import _ = require('lodash');

const FileDirectory = 'uploads/'

// Contains server side business logic that needs to be tested

function readDirectory(fs): string[] {
    const filenames = fs.readdirSync(FileDirectory);
    return filenames.filter(fn => !fn.startsWith('.'));
}

interface FileDetails {
    type: string;
    buffer: Buffer;
}

function readFile(reader, filename: string): FileDetails {
    const extension = _.last(filename.split('.'));
    const buffer = reader.readFileSync(`${FileDirectory}${filename}`);
    let type = '';
    if (extension.toUpperCase() === 'jpg'.toUpperCase()) {
        type = 'image/jpg';
    }
    if (extension.toUpperCase() === 'mp4'.toUpperCase()) {
        type = 'video/mp4';
    }
    return { type, buffer };
}

function deleteAll(fs): void {
    let files = readDirectory(fs);
    files.forEach(filename => {
        let toDelete = `${FileDirectory}${filename}`;
        fs.unlinkSync(toDelete);
    });
}

export { deleteAll, readDirectory, readFile };