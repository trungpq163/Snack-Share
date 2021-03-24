/* eslint-disable camelcase */
import passportType from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import userModel from '../models/User';
import { findUserByIdService } from '../services/passport';
import keys from './key';

const opts: any = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.SECRET_ORKEY;

export default (passport: typeof passportType) => {
    passport.use(
        new Strategy(opts, (jwt_payload: any, done: any) => {
            findUserByIdService(userModel, jwt_payload.id)
                .then((user) => {
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch((err) => console.log(err));
        })
    );
    passport.use(
        'admin',
        new Strategy(opts, (jwt_payload: any, done: any) => {
            findUserByIdService(userModel, jwt_payload.id)
                .then((user) => {
                    if (user && user.role === 'admin') {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch((err) => console.log(err));
        })
    );
    passport.use(
        'student',
        new Strategy(opts, (jwt_payload: any, done: any) => {
            findUserByIdService(userModel, jwt_payload.id)
                .then((user) => {
                    if (user && user.role === 'student') {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch((err) => console.log(err));
        })
    );
    passport.use(
        'instructor',
        new Strategy(opts, (jwt_payload: any, done: any) => {
            findUserByIdService(userModel, jwt_payload.id)
                .then((user) => {
                    if (user && user.role === 'instructor') {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch((err) => console.log(err));
        })
    );
};
