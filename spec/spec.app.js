const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('responds with status 200', async () => {
        const response = await request(app).get("/");
        expect(response.status).to.eql(200);
    })
});