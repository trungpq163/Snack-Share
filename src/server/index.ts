// import * as React from 'react';
import path from 'path';
import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import manifestHelpers from 'express-manifest-helpers';
// import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import passport from 'passport';
import paths from '../../config/paths';
// import { configureStore } from '../shared/store';
import errorHandler from './middleware/errorHandler';
import serverRenderer from './middleware/serverRenderer';
import addStore from './middleware/addStore';
import webhookVerification from './middleware/webhookVerification';
import { i18nextXhr, refreshTranslations } from './middleware/i18n';
import passportConfig from './config/passport';

import categoryRoute from './routes/category';
import courseRoute from './routes/course';
import enrollmentRoute from './routes/enrollment';
import lectureRoute from './routes/lecture';
import profileRoute from './routes/profile';
import roleRoute from './routes/role';
import usersRoute from './routes/users';
import checkoutRoute from './routes/checkout';
import webhookRoute from './routes/webhook';
import key from './config/key';

require('dotenv').config();

const app = express();

// Passport middleware
// @ts-ignore
passport.use(passport.initialize());

// Passport config will in
passportConfig(passport);

// const app = express.default();

// Use Nginx or Apache to serve static assets in production or remove the if() around the following
// lines to use the express.static middleware to serve assets for production (not recommended!)
// if (process.env.NODE_ENV === 'development') {
app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)));
// }

app.use(fileUpload());

app.use(cors());
app.options('*', cors());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));

app.get('/locales/refresh', webhookVerification, refreshTranslations);

// It's probably a good idea to serve these static assets with Nginx or Apache as well:
app.get('/locales/:locale/:ns.json', i18nextXhr);

app.get('/helloworld', (_req, res) => res.send('Hello World'));

// Mount routes
app.use('/api/', categoryRoute);
app.use('/api', courseRoute);
app.use('/api/', enrollmentRoute);
app.use('/api/', lectureRoute);
app.use('/api/profile/', profileRoute);
app.use('/api/', roleRoute);
app.use('/api/', usersRoute);
app.use('/api/', checkoutRoute);
app.use('/api/', webhookRoute);

app.use(addStore);

const manifestPath = path.join(paths.clientBuild, paths.publicPath);

app.use(
    manifestHelpers({
        manifestPath: `${manifestPath}/manifest.json`,
    })
);

app.use(serverRenderer());

app.use(errorHandler);

// Connection URL
mongoose.Promise = global.Promise;
mongoose.connect(key.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

mongoose.connection.on('error', () => {
    throw new Error(`Unable connect to database ${key.MONGODB_URI}`);
});

app.listen(process.env.PORT || 8500, () => {
    console.log(
        `[${new Date().toISOString()}]`,
        chalk.blue(`App is running: http://localhost:${process.env.PORT || 8500}`)
    );
});

export default app;
