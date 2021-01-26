import { Request, Response, NextFunction } from 'express';
import passport from 'passport';

export const hasAuthorization = (_req: Request, _res: Response, next: NextFunction) => {
    passport.authenticate('jwt', { session: false });
    next();
};
