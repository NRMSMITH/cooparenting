const request = require('supertest');
const app = require('../app');
const supabase = require('../supabaseClient');

describe('app', () => {
    describe('/', () => {
        describe('get', () => {
            it('should respond with a 200 status and the welcome msg', () => {
                return request(app)
                .get('/')
                .expect(200)
                .then((res) => {
                    expect(res.body).toEqual({msg: 'welcome to cooparenting'});
                });
            });
        });
        })
    describe('/api/user', () => {
        describe('post', () => {
            it('should respond with a user object and session id', () => {
                const email = `test${Math.ceil(Math.random()*100)}@test.com`
                const user = {email: email, password: "123456"}
                return request(app)
                .post('/api/user')
                .send(user)
                .expect(201)
                .then((res) => {
                    expect(res.body.user).toEqual(expect.any(String))
                    expect(res.body.session_id).toEqual(expect.any(String))
                    return res.body.user;
                }).then((id) => {
                    return supabase.auth.admin.deleteUser(id)
                })
            });
        });
    });
});


