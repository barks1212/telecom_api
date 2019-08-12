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

describe('activateNumber', () => {

    beforeAll(() => {
        endpoints(app)
        request = require('supertest')(app);
    })
    
    it('should 404 when passed incorrect path', done => {
        request.get('/numbers/not-a-number/activate/077077077').expect(404, done);
    })

    describe('Given customer doesnt exist', () => {
        it('should return a 404 and correct error message', done => {
            request.patch('/numbers/4/activate/077077077')
            .expect(404)
            .then(res => {
                expect(res.body).toEqual({name: 'CustomerNotFound'})
                done();
            })
        })
    });

    describe('Given customer exists', () => {
        it('should return 404 and correct error message', done => {
            request.patch('/numbers/1/activate/test')
                .expect(404)
                .then(res => {
                    expect(res.body).toEqual({name: 'NumberNotFound'})
                    done();
                })
        })
    })
});