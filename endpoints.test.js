const endpoints = require('./endpoints');
const express = require('express');
const app = express();

describe('getNumberById', () => {

    beforeAll(() => {
        endpoints(app)
        request = require('supertest')(app);
    })
    
    it('should 404 when passed incorrect path', done => {
        request.get('/numbers/not-a-number').expect(404, done);
    })

    describe('Given customer doesnt exist', () => {

        let getNumberById;

        beforeAll(() => {
            getNumberById = request.get('/numbers/4');
        })

        it('should return 404', () => {
            getNumberById.expect(404);
        })
        it('return correct error message', done => {
            getNumberById.then(res => {
                expect(res.body).toEqual({name: 'CustomerNotFound'})
                done();
            });
        })
    })
});