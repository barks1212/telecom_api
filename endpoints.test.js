const endpoints = require('./endpoints');
const express = require('express');
const app = express();

describe('getNumbers', () => {
    beforeAll(() => {
        endpoints(app)
        request = require('supertest')(app);
    });
    describe('Success', () => {
        it('should return 200 status', done => {
            request.get('/numbers').expect(200, done);
        })
    })
})

describe('getNumberById', () => {

    beforeAll(() => {
        endpoints(app)
        request = require('supertest')(app);
    })
    
    it('should 404 when passed incorrect path', done => {
        request.get('/customers/not-a-number/numbers').expect(404, done);
    })

    describe('Given customer doesnt exist', () => {
        it('should return a 404 and correct error message', done => {
            request.get('/customers/4/numbers')
                .expect(404)
                .then(res => {
                    expect(res.body).toEqual({name: 'CustomerNotFound'})
                    done();
                })
        })
    })

    describe('Success', () => {
        it('should return 200 status', done => {
            request.get('/customers/1/numbers')
            .expect(200, done);
        })
    })
});

describe('activateNumber', () => {

    beforeAll(() => {
        endpoints(app)
        request = require('supertest')(app);
    })
    
    it('should 404 when passed incorrect path', done => {
        request.get('/customers/not-a-number/numbers/activate/077077077').expect(404, done);
    })

    describe('Given customer doesnt exist', () => {
        it('should return a 404 and correct error message', done => {
            request.patch('/customers/4/numbers/activate/077077077')
            .expect(404)
            .then(res => {
                expect(res.body).toEqual({name: 'CustomerNotFound'})
                done();
            })
        })
    });

    describe('Given customer exists', () => {
        it('should return 404 and correct error message', done => {
            request.patch('/customers/1/numbers/activate/test')
                .expect(404)
                .then(res => {
                    expect(res.body).toEqual({name: 'NumberNotFound'})
                    done();
                })
        })
    })
    
    describe('Success', () => {
        it('should return 204 status', done => {
            request.patch('/customers/1/numbers/activate/1234')
            .expect(204, done);
        })
    });
});