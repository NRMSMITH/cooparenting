const request = require('supertest');
const app = require('../app');

describe('app', () => {
    it('should respond with a 200 status and the welcome msg', () => {
        return request(app)
        .get('/')
        .expect(200)
        .then((res) => {
            expect(res.body).toEqual({msg: 'welcome to cooparenting'});
        });
    });
});