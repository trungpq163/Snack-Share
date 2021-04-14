import mongoose from 'mongoose';
import supertest from 'supertest';

import app from '..';
import Course from '../models/Course';
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

// test('GET api/course with id = ``', async () => {
//     await supertest(app).get('api/course');
// });
