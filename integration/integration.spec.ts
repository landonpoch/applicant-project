import {expect, assert} from 'chai';
import axios from 'axios';
import { createReadStream } from 'fs';
var FormData = require('form-data');

const Hostname = 'http://localhost:3000/'

describe('Controller', () => {
    beforeAll(done => {
        return axios.delete(Hostname)
            .then(resp => axios.get(Hostname))
            .then(resp => expect(resp.data).to.be.empty)
            .catch(console.log)
            .finally(done);
    });

    it('should upload a new file and then read it', done => {
        let url = `${Hostname}file`;
        const fd = new FormData();
        fd.append('uploaded_file', createReadStream('./integration/MilkyWayRingAlvinWu.jpg'));
        let config = {
            headers: fd.getHeaders(),
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
        };
        return axios.post(url, fd, config)
            .then(resp => {
                expect(resp.status).to.equal(200)
                return axios.get(Hostname)
            })
            .then(resp => axios.get(`${Hostname}file/${resp.data[0]}`))
            .then(resp => {
                expect(resp.status).to.equal(200);
                expect(resp.headers['content-type']).to.equal('image/jpg');
                expect(resp.data).to.exist;
            })
            .catch(err => {
                console.log(err);
                assert.fail('test case failure');
            })
            .finally(done);
    });

    afterAll(done => {
        return axios.delete(Hostname)
            .then(resp => axios.get(Hostname))
            .then(resp => expect(resp.data).to.be.empty)
            .catch(console.log)
            .finally(done);
    });
});