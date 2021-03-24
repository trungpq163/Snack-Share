import express, { Router } from 'express';
import passport from 'passport';
import { addRoleCtrl, showRolesCtrl } from '../controllers/role';

const router: Router = express.Router();

router.route('/role/add').post(passport.authenticate('admin', { session: false }), addRoleCtrl);

router.route('/show-roles').get(passport.authenticate('jwt', { session: false }), showRolesCtrl);

export default router;
