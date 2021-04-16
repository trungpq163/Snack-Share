import mongoose from 'mongoose';
import supertest from 'supertest';

import app from '..';
import key from '../config/key';

beforeEach((done) => {
    mongoose.connect(
        key.MONGODB_URI,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        },
        () => done()
    );
});

test('GET api/courses', async () => {
    await supertest(app)
        .get('/api/courses')
        .expect(200)
        .then((res: any) => {
            // check type and length
            expect(Array.isArray(res.body)).toBeTruthy();
        });
});

test('POST login api/courses', async () => {
    await supertest(app)
        .post('/api/users/login')
        .send({
            email: 'giaovien@gmail.com',
            password: 'giaovien1230123',
        })
        .set({
            Accept: 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTUxNTMyODFjYjBkMjI3NDZlNDFiNSIsImZpcnN0X25hbWUiOiJnaWFvdmllbiIsImxhc3RfbmFtZSI6ImZmZmYiLCJyb2xlIjoiaW5zdHJ1Y3RvciIsImlhdCI6MTYxMjA4NzY1MywiZXhwIjoxNjEyMDkxMjUzfQ.812Zp2zrtHsuVg4psII1yz-X0ThcitHJPr0v6hbxDgE',
        })
        .expect('Content-Type', /json/)
        .expect(200);
});
