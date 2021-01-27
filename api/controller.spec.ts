import {expect} from 'chai';
import {deleteAll, readDirectory, readFile} from './controller';

describe('Controller', () => {
  it('should read directory', () => {
    let mockReader = {
      readdirSync: (dirname) => ['img1.jpg', 'img2.jpg']
    }
    const response = readDirectory(mockReader);
    expect(response).to.exist;
    expect(response[0]).to.equal('img1.jpg');
    expect(response[1]).to.equal('img2.jpg');
  });

  it('should read jpg file', () => {
    let mockReader = {
      readFileSync: (filename) => Buffer.alloc(4, '1234')
    };
    const { type, buffer } = readFile(mockReader, 'img1.jpg');
    expect(type).to.equal('image/jpg');
    expect(buffer).to.exist;
  });

  it('should read mp4 file', () => {
    let mockReader = {
      readFileSync: (filename) => Buffer.alloc(4, '1234')
    };
    const { type, buffer } = readFile(mockReader, 'vid1.mp4');
    expect(type).to.equal('video/mp4');
    expect(buffer).to.exist;
  });

  it('should delete all files', () => {
    let deleteFilename = 'img1.jpg';
    let mockReader = {
      readdirSync: (dirname) => [deleteFilename],
      unlinkSync: (filename) => expect(filename).to.equal(`uploads/${deleteFilename}`),
    };
    deleteAll(mockReader);
  })
});