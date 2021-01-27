import { Strategy, ExtractJwt } from 'passport-jwt';
import userModel from '../models/User';
import { findUserByIdService } from '../services/passport';
import keys from './key';

const opts: any = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.SECRET_ORKEY;

export default (passport: any) => {
    passport.use(
        // eslint-disable-next-line camelcase
        new Strategy(opts, (jwt_payload: any, done: any) => {
            // User.findById(jwt_payload.id)
            //     .then((user: any) => {
            //         if (user) {
            //             return done(null, user);
            //         }
            //         return done(null, false);
            //     })
            //     .catch((err: any) => console.log(err));
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
};
